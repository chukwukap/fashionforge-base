import { motion } from "framer-motion";
import { TrendingUp, Star, Eye, Download, Users, Clock } from "lucide-react";

export function DesignStats() {
  const stats = [
    {
      label: "Trending",
      value: "12%",
      icon: TrendingUp,
      color: "from-green-400 to-green-600",
    },
    {
      label: "Total Likes",
      value: "1.2k",
      icon: Star,
      color: "from-yellow-400 to-yellow-600",
    },
    {
      label: "Views",
      value: "45k",
      icon: Eye,
      color: "from-blue-400 to-blue-600",
    },
    {
      label: "Downloads",
      value: "3.8k",
      icon: Download,
      color: "from-purple-400 to-purple-600",
    },
    {
      label: "Followers",
      value: "2.5k",
      icon: Users,
      color: "from-pink-400 to-pink-600",
    },
    {
      label: "Avg. Time",
      value: "5m 30s",
      icon: Clock,
      color: "from-indigo-400 to-indigo-600",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className={`bg-gradient-to-br ${stat.color} rounded-lg shadow-lg p-4 text-white`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <div className="flex items-center justify-between mb-2">
            <stat.icon className="h-6 w-6" />
            <span className="text-xs font-medium">{stat.label}</span>
          </div>
          <p className="text-2xl font-bold">{stat.value}</p>
        </motion.div>
      ))}
    </div>
  );
}
