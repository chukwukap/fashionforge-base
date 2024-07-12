import { Design } from "@/lib/types";
import { ethers } from "ethers";

export const sampleDesigns: Design[] = [
  {
    id: "1",
    name: "Ethereal Evening Gown",
    description:
      "A stunning evening gown with ethereal qualities, perfect for red carpet events.",
    price: ethers.utils.parseEther("1.5"),
    likes: 1200,
    views: 5600,
    status: "Published",
    designer: "Aria Couture",
    createdAt: 1620000000,
    updatedAt: 1622000000,
    mainImage:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    variations: [
      {
        id: "v1",
        name: "Midnight Blue",
        image:
          "https://images.unsplash.com/photo-1559034750-cdab70a66b8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "v2",
        name: "Ruby Red",
        image:
          "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "v3",
        name: "Emerald Green",
        image:
          "https://images.unsplash.com/photo-1583350229873-5a9a7c5d9f3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      },
    ],
    tags: ["Evening Wear", "Red Carpet", "Luxury", "Handmade"],
  },
  {
    id: "2",
    name: "Urban Chic Jacket",
    description: "A versatile jacket that embodies urban style and comfort.",
    price: ethers.utils.parseEther("0.8"),
    likes: 980,
    views: 4200,
    status: "Published",
    designer: "StreetStyle Co.",
    createdAt: 1625000000,
    updatedAt: 1626000000,
    mainImage:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    variations: [
      {
        id: "v1",
        name: "Charcoal Grey",
        image:
          "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "v2",
        name: "Navy Blue",
        image:
          "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      },
    ],
    tags: ["Streetwear", "Casual", "Unisex", "Everyday"],
  },
  {
    id: "3",
    name: "Bohemian Summer Dress",
    description:
      "A light, flowy dress perfect for summer festivals and beach days.",
    price: ethers.utils.parseEther("0.6"),
    likes: 1500,
    views: 6800,
    status: "Published",
    designer: "Boho Bliss",
    createdAt: 1630000000,
    updatedAt: 1631000000,
    mainImage:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    variations: [
      {
        id: "v1",
        name: "Sunflower Yellow",
        image:
          "https://images.unsplash.com/photo-1562790879-dfde82829db0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "v2",
        name: "Ocean Blue",
        image:
          "https://images.unsplash.com/photo-1562790351-d273a961e0e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "v3",
        name: "Coral Pink",
        image:
          "https://images.unsplash.com/photo-1562790879-0a72b7819def?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      },
    ],
    tags: ["Boho", "Summer", "Festival", "Beach"],
  },
  {
    id: "4",
    name: "Power Suit Set",
    description:
      "A sleek and professional suit set for the modern businessperson.",
    price: ethers.utils.parseEther("2.0"),
    likes: 2200,
    views: 9500,
    status: "Published",
    designer: "Executive Elegance",
    createdAt: 1635000000,
    updatedAt: 1636000000,
    mainImage:
      "https://images.unsplash.com/photo-1580913428735-bd3c269d6a82?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    variations: [
      {
        id: "v1",
        name: "Classic Black",
        image:
          "https://images.unsplash.com/photo-1580913428706-c311e67898b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "v2",
        name: "Navy Pinstripe",
        image:
          "https://images.unsplash.com/photo-1580913428023-02c695666d61?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      },
    ],
    tags: ["Business", "Professional", "Formal", "Tailored"],
  },
  {
    id: "5",
    name: "Eco-Friendly Activewear Set",
    description:
      "Sustainable and stylish activewear for the environmentally conscious fitness enthusiast.",
    price: ethers.utils.parseEther("0.75"),
    likes: 1800,
    views: 7200,
    status: "Published",
    designer: "GreenFit",
    createdAt: 1640000000,
    updatedAt: 1641000000,
    mainImage:
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    variations: [
      {
        id: "v1",
        name: "Forest Green",
        image:
          "https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "v2",
        name: "Ocean Blue",
        image:
          "https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      },
    ],
    tags: ["Activewear", "Eco-Friendly", "Sustainable", "Fitness"],
  },
];
