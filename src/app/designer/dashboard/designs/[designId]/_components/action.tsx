import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tooltip } from "@/components/ui/tooltip";
import {
  ShoppingCart,
  Heart,
  Share2,
  Clock,
  Twitter,
  Facebook,
  Linkedin,
  DollarSign,
  Award,
  ChevronRight,
} from "lucide-react";
import { Design } from "@/lib/types";
import { ethers } from "ethers";

interface DesignActionsProps {
  design: Design;
}

export function DesignActions({ design }: DesignActionsProps) {
  const [liked, setLiked] = useState(false);
  const [timeLeft, setTimeLeft] = useState(86400); // 24 hours in seconds
  const [purchaseStep, setPurchaseStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleLike = () => {
    setLiked(!liked);
    // Here you would typically call an API to update the like status
  };

  const handlePurchase = () => {
    setPurchaseStep(1);
    // Here you would typically initiate the purchase process
  };

  const handleShare = (platform: string) => {
    // Implement sharing logic for each platform
    console.log(`Sharing on ${platform}`);
  };

  return (
    <div className="md:w-1/2 p-8 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-r-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h4 className="font-semibold mb-2 flex items-center text-indigo-700">
            <Clock size={20} className="mr-2" /> Limited Time Offer
          </h4>
          <div className="text-3xl font-bold text-indigo-600">
            {formatTime(timeLeft)}
          </div>
          <Progress
            value={(86400 - timeLeft) / 864}
            className="mt-2 bg-indigo-500"
          />
        </div>

        <AnimatePresence>
          {purchaseStep === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Button
                className="w-full text-lg py-6 bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
                onClick={handlePurchase}
              >
                <ShoppingCart className="mr-2 h-5 w-5" /> Purchase Design
              </Button>
            </motion.div>
          )}

          {purchaseStep === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-semibold mb-2 text-indigo-700">
                  Confirm Purchase
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  You are about to purchase &quot;{design.name}&quot; for{" "}
                  {ethers.utils.formatEther(design.price)} ETH.
                </p>
                <Button
                  className="w-full mb-2 bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
                  onClick={() => setPurchaseStep(2)}
                >
                  <DollarSign className="mr-2 h-5 w-5" /> Confirm Payment
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-indigo-200 text-indigo-600 hover:bg-indigo-50 transition-colors duration-300"
                  onClick={() => setPurchaseStep(0)}
                >
                  Cancel
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-between">
          <Tooltip>
            <Button
              variant="outline"
              onClick={handleLike}
              className={`flex-1 mr-2 ${
                liked
                  ? "bg-pink-100 text-pink-600 border-pink-300"
                  : "border-indigo-200 text-indigo-600 hover:bg-indigo-50"
              } transition-colors duration-300`}
            >
              <Heart
                className={`mr-2 h-5 w-5 ${liked ? "fill-pink-500" : ""}`}
              />
              {liked ? "Liked" : "Like"}
            </Button>
          </Tooltip>
          <Tooltip>
            <Button
              variant="outline"
              className="flex-1 ml-2 border-indigo-200 text-indigo-600 hover:bg-indigo-50 transition-colors duration-300"
            >
              <Share2 className="mr-2 h-5 w-5" /> Share
            </Button>
          </Tooltip>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h4 className="font-semibold mb-4 text-indigo-700">
            Share on Social Media
          </h4>
          <div className="flex justify-around">
            <Tooltip>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleShare("Twitter")}
                className="hover:bg-blue-50 text-blue-400 transition-colors duration-300"
              >
                <Twitter className="h-6 w-6" />
              </Button>
            </Tooltip>
            <Tooltip>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleShare("Facebook")}
                className="hover:bg-blue-50 text-blue-600 transition-colors duration-300"
              >
                <Facebook className="h-6 w-6" />
              </Button>
            </Tooltip>
            <Tooltip>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleShare("LinkedIn")}
                className="hover:bg-blue-50 text-blue-700 transition-colors duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </Button>
            </Tooltip>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h4 className="font-semibold mb-4 flex items-center text-indigo-700">
            <Award className="mr-2 h-5 w-5" /> Designer Achievements
          </h4>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-700">
              <ChevronRight className="h-4 w-4 mr-2 text-indigo-400" />
              🏆 Top Seller in Evening Wear
            </li>
            <li className="flex items-center text-gray-700">
              <ChevronRight className="h-4 w-4 mr-2 text-indigo-400" />⭐ 4.9
              Average Rating
            </li>
            <li className="flex items-center text-gray-700">
              <ChevronRight className="h-4 w-4 mr-2 text-indigo-400" />
              🎨 Featured Designer of the Month
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
