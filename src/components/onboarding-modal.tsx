"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CustomModal } from "@/components/ui/custom-modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { MultiSelect } from "@/components/ui/multi-select";
import { userService } from "@/services/user";
import { UserRole, UserStatus } from "@prisma/client";

const stepOneSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
});

const stepTwoSchema = z.object({
  goal: z.enum(["buy", "sell", "both"]),
  isDesigner: z.boolean(),
});

const stepThreeSchema = z.object({
  skills: z.array(z.string()).min(1, "Please select at least one skill"),
});

const formSchema = stepOneSchema.merge(stepTwoSchema).merge(stepThreeSchema);

type FormData = z.infer<typeof formSchema>;

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  privyUserId: string;
}

const skillOptions = [
  "Fashion Design",
  "Pattern Making",
  "Sewing",
  "Illustration",
  "CAD",
  "3D Modeling",
  "Textile Design",
  "Sustainable Design",
];

export const OnboardingModal: React.FC<OnboardingModalProps> = ({
  isOpen,
  onClose,
  privyUserId,
}) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const { control, handleSubmit, watch } = form;
  console.log(watch("isDesigner"));
  const isDesigner = watch("isDesigner");

  const onSubmit = async (data: FormData) => {
    if (step < (isDesigner ? 3 : 2)) {
      setStep(step + 1);
    } else {
      setIsSubmitting(true);
      try {
        await userService.createUser({
          status: UserStatus.ACTIVE,
          role: UserRole.DESIGNER,
          privyId: privyUserId,
          ...data,
        });
        onClose();
      } catch (error) {
        console.error("Error creating user:", error);
        // Handle error (show error message to user)
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <CustomModal isOpen={isOpen}>
      <h2 className="text-2xl font-bold mb-4">Welcome to FashionForge!</h2>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {step === 1 && (
            <>
              <FormField
                control={control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Your Name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Your Email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}
          {step === 2 && (
            <>
              <FormField
                control={control}
                name="goal"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What brings you to FashionForge?</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your goal" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="buy">
                          I want to buy designs
                        </SelectItem>
                        <SelectItem value="sell">
                          I want to sell my designs
                        </SelectItem>
                        <SelectItem value="both">
                          I want to buy and sell designs
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="isDesigner"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>I am a fashion designer</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
            </>
          )}
          {step === 3 && isDesigner && (
            <FormField
              control={control}
              name="skills"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select your skills</FormLabel>
                  <FormControl>
                    <MultiSelect
                      options={skillOptions}
                      selected={field.value || []}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting
              ? "Submitting..."
              : step === (isDesigner ? 3 : 2)
              ? "Complete"
              : "Next"}
          </Button>
        </form>
      </Form>
    </CustomModal>
  );
};
