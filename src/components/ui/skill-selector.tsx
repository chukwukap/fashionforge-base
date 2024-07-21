import React from "react";
import { motion } from "framer-motion";

interface SkillCategory {
  name: string;
  skills: string[];
}

interface SkillSelectorProps {
  skillCategories: SkillCategory[];
  selectedSkills: string[];
  onChange: (skills: string[]) => void;
  error?: string;
}

export const SkillSelector: React.FC<SkillSelectorProps> = ({
  skillCategories,
  selectedSkills,
  onChange,
  error,
}) => {
  const toggleSkill = (skill: string) => {
    const updatedSkills = selectedSkills.includes(skill)
      ? selectedSkills.filter((s) => s !== skill)
      : [...selectedSkills, skill];
    onChange(updatedSkills);
  };

  return (
    <div className="space-y-4">
      {skillCategories.map((category) => (
        <div key={category.name} className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-700">
            {category.name}
          </h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <motion.button
                key={skill}
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  selectedSkills.includes(skill)
                    ? "bg-purple-600 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
                onClick={() => toggleSkill(skill)}
              >
                {skill}
              </motion.button>
            ))}
          </div>
        </div>
      ))}
      {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
    </div>
  );
};
