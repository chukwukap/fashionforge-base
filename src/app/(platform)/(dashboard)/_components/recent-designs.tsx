import React from "react";
import Image from "next/image";
import { Eye, Star, TrendingUp } from "lucide-react";

const designs = [
  {
    id: 1,
    name: "Summer Breeze Dress",
    collection: "Summer 2024",
    status: "Published",
    date: "2024-03-15",
    views: 1250,
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    nftStatus: "Minted",
  },
  {
    id: 2,
    name: "Cyber Punk Jacket",
    collection: "Futuristic Fall",
    status: "Draft",
    date: "2024-03-18",
    views: 850,
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    nftStatus: "Not Minted",
  },
  {
    id: 3,
    name: "Eco-Friendly Jeans",
    collection: "Green Earth",
    status: "Published",
    date: "2024-03-20",
    views: 2100,
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    nftStatus: "Minted",
  },
];

export function RecentDesigns() {
  return (
    <div className="overflow-hidden rounded-lg bg-gray-800 shadow-lg">
      <div className="bg-gradient-to-r from-gray-700 to-gray-800 px-7 py-4">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-white">
          <Star className="h-5 w-5 text-blue-400" />
          Recent Designs
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-900">
              <th className="px-4 py-2 text-left font-medium text-gray-300">
                Design
              </th>
              <th className="hidden px-4 py-2 text-left font-medium text-gray-300 sm:table-cell">
                Collection
              </th>
              <th className="hidden px-4 py-2 text-left font-medium text-gray-300 sm:table-cell">
                Status
              </th>
              <th className="hidden px-4 py-2 text-left font-medium text-gray-300 md:table-cell">
                Date
              </th>
              <th className="px-4 py-2 text-right font-medium text-gray-300">
                Views
              </th>
              <th className="px-4 py-2 text-right font-medium text-gray-300">
                NFT Status
              </th>
            </tr>
          </thead>
          <tbody>
            {designs.map((design) => (
              <tr
                key={design.id}
                className="hover:bg-gray-700/50 transition-colors"
              >
                <td className="px-4 py-2">
                  <div className="flex items-center gap-3">
                    <Image
                      src={design.image}
                      alt={design.name}
                      width={48}
                      height={48}
                      className="rounded-md object-cover"
                    />
                    <span className="font-medium text-white">
                      {design.name}
                    </span>
                  </div>
                </td>
                <td className="hidden px-4 py-2 text-gray-300 sm:table-cell">
                  {design.collection}
                </td>
                <td className="hidden px-4 py-2 sm:table-cell">
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-medium ${
                      design.status === "Published"
                        ? "bg-green-900 text-green-300"
                        : "bg-yellow-900 text-yellow-300"
                    }`}
                  >
                    {design.status}
                  </span>
                </td>
                <td className="hidden px-4 py-2 text-gray-300 md:table-cell">
                  {design.date}
                </td>
                <td className="px-4 py-2 text-right">
                  <span className="flex items-center justify-end gap-1 text-white">
                    <Eye className="h-4 w-4 text-blue-400" />
                    {design.views.toLocaleString()}
                  </span>
                </td>
                <td className="px-4 py-2 text-right">
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-medium ${
                      design.nftStatus === "Minted"
                        ? "bg-indigo-900 text-indigo-300"
                        : "bg-gray-700 text-gray-300"
                    }`}
                  >
                    {design.nftStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
