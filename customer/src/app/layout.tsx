import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "./components/footer";
import CustomLayout from "./CustomLayout";

export const metadata: Metadata = {
  title: "Saloon Booking App",
  description: "Make a Appointment Here!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <CustomLayout />
      </body>
    </html>
  );
}
