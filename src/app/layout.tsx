import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import CommonLayout from "@/components/common-layout/index";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "User Management",
  description: "A simple user management system created in nextjs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`max-w-screen h-screen ${openSans.className} `}>
        <CommonLayout>{children}</CommonLayout>
      </body>
    </html>
  );
}
