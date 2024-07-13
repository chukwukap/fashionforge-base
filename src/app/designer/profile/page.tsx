"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Pencil, Camera, Save } from "lucide-react";

export default function DesignerProfilePage() {
  const [isEditing, setIsEditing] = React.useState(false);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Designer Profile</h1>
          <Button onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? (
              <>
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </>
            ) : (
              <>
                <Pencil className="w-4 h-4 mr-2" />
                Edit Profile
              </>
            )}
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-shrink-0">
            <div className="relative w-48 h-48">
              <Image
                src="/placeholder-avatar.jpg"
                alt="Designer Avatar"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
              {isEditing && (
                <Button className="absolute bottom-2 right-2 rounded-full p-2">
                  <Camera className="w-5 h-5" />
                </Button>
              )}
            </div>
          </div>

          <div className="flex-grow space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <Input
                type="text"
                defaultValue="Jane Designer"
                disabled={!isEditing}
                className="mt-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Input
                type="email"
                defaultValue="jane@designstudio.com"
                disabled={!isEditing}
                className="mt-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Bio
              </label>
              <Textarea
                defaultValue="Passionate fashion designer with 5 years of experience in sustainable and ethical clothing design."
                disabled={!isEditing}
                className="mt-1"
                rows={4}
              />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Portfolio Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden"
              >
                <Image
                  src={`/placeholder-design-${item}.jpg`}
                  alt={`Design ${item}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
