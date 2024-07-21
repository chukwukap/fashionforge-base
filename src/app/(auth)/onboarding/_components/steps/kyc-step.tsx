import React from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";

const KYCStep: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Verification
      </h2>
      <p className="text-center text-gray-600">
        We need to verify your identity to ensure a safe and trustworthy
        community.
      </p>
      <div className="space-y-4">
        <div>
          <Label htmlFor="idType">ID Type</Label>
          <Select {...register("idType", { required: "ID Type is required" })}>
            <option value="">Select ID Type</option>
            <option value="passport">Passport</option>
            <option value="driverLicense">Driver&apos;s License</option>
            <option value="nationalId">National ID</option>
          </Select>
          {errors.idType && (
            <p className="text-red-500 text-sm mt-1">
              {errors.idType.message as string}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="idNumber">ID Number</Label>
          <Input
            id="idNumber"
            {...register("idNumber", { required: "ID Number is required" })}
            placeholder="Enter your ID number"
          />
          {errors.idNumber && (
            <p className="text-red-500 text-sm mt-1">
              {errors.idNumber.message as string}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="idFile">Upload ID Document</Label>
          <Input
            id="idFile"
            type="file"
            {...register("idFile", { required: "ID Document is required" })}
          />
          {errors.idFile && (
            <p className="text-red-500 text-sm mt-1">
              {errors.idFile.message as string}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default KYCStep;
