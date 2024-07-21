import React from "react";
import Image from "next/image";

export const ColorInspirationSection: React.FC = () => {
  const inspirations = [
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
      alt: "High fashion model in red dress",
    },
    {
      type: "palette",
      name: "Parisian Chic",
      colors: ["#F2D2BD", "#8E7C68", "#3A3532", "#E8C39E", "#D9A566"],
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&q=80",
      alt: "Luxurious golden jewelry",
    },
    {
      type: "palette",
      name: "Midnight Glamour",
      colors: ["#0E1C36", "#295F85", "#7FA6B7", "#B8D4E3", "#F5E2C8"],
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80",
      alt: "Classic fashion accessories",
    },
    {
      type: "palette",
      name: "Vintage Elegance",
      colors: ["#8B323E", "#C7956D", "#965A3E", "#C7956D", "#E3D985"],
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 ">Color Inspirations</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {inspirations.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
          >
            {item.type === "image" ? (
              <div className="h-64 relative">
                <Image
                  src={item.src as string}
                  alt={item.alt ?? ""}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ) : (
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{item.name}</h3>
                <div className="flex mb-4">
                  {item.colors?.map((color, i) => (
                    <div
                      key={i}
                      className="flex-1 h-24 first:rounded-l-lg last:rounded-r-lg"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {item.colors?.map((color, i) => (
                    <div key={i} className="text-center">
                      <div
                        className="w-8 h-8 mx-auto rounded-full border-2 border-gray-200"
                        style={{ backgroundColor: color }}
                      ></div>
                      <span className="text-xs font-mono mt-1 block">
                        {color}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
