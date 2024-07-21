import { v4 as uuidv4 } from "uuid";
import supabase from "@/lib/supabase";

export async function uploadFile(file: File, bucket: string) {
  const fileExt = file.name.split(".").pop();
  const fileName = `${uuidv4()}.${fileExt}`;
  const filePath = `${bucket}/${fileName}`;

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(filePath, file);

  if (error) {
    throw new Error("Error uploading file: " + error.message);
  }

  const {
    data: { publicUrl },
  } = supabase.storage.from(bucket).getPublicUrl(filePath);

  return { filePath, publicUrl };
}
