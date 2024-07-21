import React from "react";
import { motion } from "framer-motion";
import { useFormContext } from "react-hook-form";
import { Card } from "@/components/ui/card";
import { CloudIcon, UserIcon } from "@heroicons/react/24/outline";

interface RoleSelectionStepProps {
  onRoleSelect: (role: "designer" | "client") => void;
}

export const RoleSelectionStep: React.FC<RoleSelectionStepProps> = ({
  onRoleSelect,
}) => {
  const { register } = useFormContext();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-800">
        I am a...
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Card
            className="p-6 cursor-pointer hover:bg-indigo-50 transition-colors"
            onClick={() => onRoleSelect("designer")}
          >
            <div className="flex flex-col items-center text-center">
              <CloudIcon className="w-16 h-16 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-indigo-600">
                Designer
              </h3>
              <p className="text-gray-600">
                I create fashion designs and want to showcase my work.
              </p>
            </div>
          </Card>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Card
            className="p-6 cursor-pointer hover:bg-pink-50 transition-colors"
            onClick={() => onRoleSelect("client")}
          >
            <div className="flex flex-col items-center text-center">
              <UserIcon className="w-16 h-16 text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-pink-600">
                Client
              </h3>
              <p className="text-gray-6000">
                I&apos;m looking for unique fashion designs for my projects.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
      <input type="hidden" {...register("role")} />
    </div>
  );
};

export default RoleSelectionStep;
