// hooks/usePinataMessaging.ts
import { useState, useEffect } from "react";
import { usePrivy } from "@privy-io/react-auth";
import pinataSDK from "@pinata/sdk";

const pinata = new pinataSDK({
  pinataJWTKey: process.env.NEXT_PUBLIC_PINATA_JWT,
});

export function usePinataMessaging() {
  const { user } = usePrivy();
  const [messages, setMessages] = useState<any>([]);

  const sendMessage = async (content: string, conversationId: string) => {
    if (!user) return;

    const message = {
      sender: user?.wallet?.address,
      content,
      timestamp: Date.now(),
      conversationId,
    };

    try {
      const result = await pinata.pinJSONToIPFS(message, {
        pinataMetadata: {
          name: `message-${Date.now()}`,
          keyvalues: JSON.stringify({
            conversationId,
            sender: user?.wallet?.address,
          }),
        },
      });

      return result.IpfsHash;
    } catch (error) {
      console.error("Error sending message:", error);
      throw error;
    }
  };

  const getMessages = async (conversationId: string) => {
    try {
      const filter = {
        status: "pinned",
        metadata: {
          keyvalues: {
            conversationId: {
              value: conversationId,
              op: "eq",
            },
          },
        },
      };

      const result = await pinata.pinList(filter);

      const fetchedMessages = await Promise.all(
        result.rows.map(async (pin) => {
          const response = await fetch(
            `https://gateway.pinata.cloud/ipfs/${pin.ipfs_pin_hash}`
          );
          const data = await response.json();
          return data;
        })
      );

      setMessages(fetchedMessages.sort((a, b) => a.timestamp - b.timestamp));
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  return { sendMessage, getMessages, messages };
}
