import { AuthWrapper } from "@/components/auth-wrapper";

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <AuthWrapper>{children}</AuthWrapper>
    </div>
  );
}
