import type { Metadata } from "next";
import { TWKEverett } from "@/assets/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "taostats",
  description: "Metagraph Rankings, Statistics & Analysis",
};

interface IProps {
  children: React.ReactNode;
}

function Layout({ children }: IProps) {
  return (
    <html>
      <body className={TWKEverett.className}>{children}</body>
    </html>
  );
}

export default Layout;
