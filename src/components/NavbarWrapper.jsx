"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

// Routes (and their sub-routes) where the Navbar should be hidden.
const HIDDEN_ON = ["/projects"];

export default function NavbarWrapper() {
  const pathname = usePathname();
  const hidden = HIDDEN_ON.some((prefix) => pathname.startsWith(prefix));
  if (hidden) return null;
  return <Navbar />;
}
