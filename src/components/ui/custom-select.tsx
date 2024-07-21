import React from "react";
import ReactSelect, { Props as ReactSelectProps } from "react-select";

interface SelectProps extends ReactSelectProps {
  label: string;
  error?: string;
}

export const Select: React.FC<SelectProps> = ({ label, error, ...props }) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <ReactSelect
        {...props}
        className="react-select-container"
        classNamePrefix="react-select"
        styles={{
          control: (provided) => ({
            ...provided,
            borderColor: error ? "#ef4444" : "#d1d5db",
            "&:hover": {
              borderColor: error ? "#ef4444" : "#9ca3af",
            },
          }),
        }}
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
};
