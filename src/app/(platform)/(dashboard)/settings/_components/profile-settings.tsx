import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSpring, animated } from "react-spring";
import { CameraIcon } from "@heroicons/react/24/solid";

export function ProfileSettings() {
  const [profile, setProfile] = useState({
    name: "Alice Johnson",
    email: "alice@example.com",
    bio: "Fashion designer specializing in sustainable and ethical clothing.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the updated profile to your backend
    console.log("Updated profile:", profile);
    // Show a success message or toast notification
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ ...profile, avatar: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const springProps = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
  });

  return (
    <animated.div style={springProps}>
      <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
        Profile Information
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative w-32 h-32 mx-auto mb-6">
          <motion.img
            src={profile.avatar}
            alt={profile.name}
            className="w-full h-full rounded-full object-cover"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
          <label
            htmlFor="avatar"
            className="absolute bottom-0 right-0 bg-pink-500 rounded-full p-2 cursor-pointer"
          >
            <CameraIcon className="w-6 h-6 text-white" />
            <input
              id="avatar"
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="hidden"
            />
          </label>
        </div>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={profile.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-gray-600 focus:border-pink-500 focus:ring focus:ring-pink-500 focus:ring-opacity-50 text-white placeholder-gray-400"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={profile.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-gray-600 focus:border-pink-500 focus:ring focus:ring-pink-500 focus:ring-opacity-50 text-white placeholder-gray-400"
            />
          </div>
          <div>
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              rows={4}
              value={profile.bio}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-gray-600 focus:border-pink-500 focus:ring focus:ring-pink-500 focus:ring-opacity-50 text-white placeholder-gray-400"
            ></textarea>
          </div>
        </div>

        <motion.button
          type="submit"
          className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-pink-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Save Changes
        </motion.button>
      </form>
    </animated.div>
  );
}
