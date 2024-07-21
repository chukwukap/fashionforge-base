import { z } from "zod";

export const onboardingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  profilePicture: z.instanceof(File).optional(),
  experience: z.number().min(0, "Experience cannot be negative"),
  specializations: z
    .array(z.string())
    .min(1, "Select at least one specialization"),
  bio: z.string().max(500, "Bio must be 500 characters or less"),
  portfolioItems: z
    .array(z.instanceof(File))
    .max(5, "Maximum 5 portfolio items"),
  hourlyRate: z.number().min(0, "Hourly rate cannot be negative"),
  availability: z.array(z.string()),
  skills: z.array(z.string()).min(1, "Select at least one skill"),
  kycVerified: z.boolean(),
  walletAddress: z.string().optional(),
  cryptoCurrency: z.enum(["ETH", "USDC", "DAI"]),
  location: z.string().optional(),
  minimumProjectSize: z
    .number()
    .min(0, "Minimum project size cannot be negative"),
  kycDocumentType: z.string().optional(),
  kycDocumentNumber: z.string().optional(),
  kycDocumentUploaded: z.boolean().optional(),
});
