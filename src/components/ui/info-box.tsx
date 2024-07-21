import React from "react";

interface InfoBoxProps {
  title: string;
  content: string;
}

export const InfoBox: React.FC<InfoBoxProps> = ({ title, content }) => {
  return (
    <div
      className="bg-blue-50 border-l-4 border-blue-500 text-blue-700 p-4"
      role="alert"
    >
      <p className="font-bold">{title}</p>
      <p>{content}</p>
    </div>
  );
};
