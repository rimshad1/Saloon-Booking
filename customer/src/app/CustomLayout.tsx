"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Footer from "./components/footer";

export default function CustomLayout() {
  const path = usePathname();
  return <>{path == "/signUp" || path == "/signIn" ? null : <Footer />}</>;
}
