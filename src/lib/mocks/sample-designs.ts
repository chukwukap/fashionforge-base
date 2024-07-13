import { Design } from "@/lib/types";
import { ethers } from "ethers";

export const sampleDesigns: Design[] = [
  {
    id: "0x1234567890123456789012345678901234567890",
    name: "Ethereal Evening Gown",
    description:
      "A stunning evening gown with ethereal qualities, perfect for red carpet events.",
    price: ethers.BigNumber.from("1"),
    likes: 1200,
    views: 5600,
    status: "Minted",
    designer: "0xabcdef1234567890abcdef1234567890abcdef12",
    createdAt: 1620000000,
    updatedAt: 1622000000,
    mainImage: "https://images.unsplash.com/photo-1566174053879-31528523f8ae",
    variations: [
      {
        id: "0xaaa1",
        name: "Midnight Blue",
        image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956",
      },
      {
        id: "0xaaa2",
        name: "Ruby Red",
        image: "https://images.unsplash.com/photo-1551803091-e20673f15770",
      },
      {
        id: "0xaaa3",
        name: "Emerald Green",
        image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03",
      },
    ],
    tags: ["Evening Wear", "Red Carpet", "Luxury", "Handmade"],
    collectionId: "0xfedcba9876543210fedcba9876543210fedcba98",
  },
  {
    id: "0x2345678901234567890123456789012345678901",
    name: "Urban Chic Jacket",
    description: "A versatile jacket that embodies urban style and comfort.",
    price: ethers.BigNumber.from("8"),
    likes: 980,
    views: 4200,
    status: "ForSale",
    designer: "0xbcdef1234567890abcdef1234567890abcdef123",
    createdAt: 1625000000,
    updatedAt: 1626000000,
    mainImage: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
    variations: [
      {
        id: "0xbbb1",
        name: "Charcoal Grey",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
      },
      {
        id: "0xbbb2",
        name: "Navy Blue",
        image: "https://images.unsplash.com/photo-1591047139756-eec61c18a9d2",
      },
    ],
    tags: ["Streetwear", "Casual", "Unisex", "Everyday"],
    collectionId: "0xfedcba9876543210fedcba9876543210fedcba98",
  },
  // ... Add more designs with similar updates ...
];
