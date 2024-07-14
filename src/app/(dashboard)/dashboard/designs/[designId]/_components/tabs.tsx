import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Design } from "@/lib/types";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Info, FileText, MessageCircle, Star, User } from "lucide-react";

interface DesignTabsProps {
  design: Design;
}

export function DesignTabs({ design }: DesignTabsProps) {
  const [activeTab, setActiveTab] = useState("details");

  const tabContent = {
    details: (
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Info className="mr-2 h-5 w-5 text-indigo-500" /> Design Details
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-700">Materials</h4>
              <p className="text-gray-600">Premium silk and chiffon blend</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-700">Care Instructions</h4>
              <p className="text-gray-600">Dry clean only</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-700">Sizing</h4>
              <p className="text-gray-600">Available in sizes XS to XL</p>
            </div>
          </div>
        </CardContent>
      </Card>
    ),
    story: (
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <FileText className="mr-2 h-5 w-5 text-indigo-500" /> Design Story
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Inspired by the ethereal beauty of a moonlit garden, this evening
            gown captures the essence of romance and elegance. Each intricate
            detail is carefully crafted to create a timeless piece that makes a
            statement at any formal event.
          </p>
        </CardContent>
      </Card>
    ),
    reviews: (
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <MessageCircle className="mr-2 h-5 w-5 text-indigo-500" /> Customer
            Reviews
          </h3>
          <div className="space-y-4">
            {[1, 2, 3].map((review) => (
              <div
                key={review}
                className="border-b border-gray-200 pb-4 last:border-b-0"
              >
                <div className="flex items-center mb-2">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage
                      src={`https://i.pravatar.cc/40?img=${review}`}
                    />
                    <AvatarFallback>U{review}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-gray-800">User {review}</p>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < 4 ? "text-yellow-400" : "text-gray-300"
                          }`}
                          fill="currentColor"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  Absolutely stunning design! The attention to detail is
                  impeccable.
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    ),
    designer: (
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <User className="mr-2 h-5 w-5 text-indigo-500" /> About the Designer
          </h3>
          <div className="flex items-center mb-4">
            <Avatar className="h-16 w-16 mr-4">
              <AvatarImage src="https://i.pravatar.cc/64?img=5" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="text-lg font-medium text-gray-800">
                Aria Couture
              </h4>
              <p className="text-gray-600">Luxury Fashion Designer</p>
            </div>
          </div>
          <p className="text-gray-600 mb-4">
            With over a decade of experience in haute couture, Aria Couture
            brings a unique blend of classic elegance and modern innovation to
            every design.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Award Winning</Badge>
            <Badge variant="secondary">Sustainable Fashion</Badge>
            <Badge variant="secondary">Celebrity Favorite</Badge>
          </div>
        </CardContent>
      </Card>
    ),
  };

  return (
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
      className="w-full mt-5"
    >
      <TabsList className="grid w-full grid-cols-4 bg-indigo-50 rounded-full p-1">
        <TabsTrigger value="details" className="rounded-full">
          Details
        </TabsTrigger>
        <TabsTrigger value="story" className="rounded-full">
          Story
        </TabsTrigger>
        <TabsTrigger value="reviews" className="rounded-full">
          Reviews
        </TabsTrigger>
        <TabsTrigger value="designer" className="rounded-full">
          Designer
        </TabsTrigger>
      </TabsList>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="mt-6"
        >
          <TabsContent value={activeTab}>
            {tabContent[activeTab as keyof typeof tabContent]}
          </TabsContent>
        </motion.div>
      </AnimatePresence>
    </Tabs>
  );
}
