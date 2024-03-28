import type { Metadata } from "next";
import { TWKEverett } from "@/assets/fonts";
import "./globals.css";
import ActionsBar from "@/components/header/actions-bar";
import NavigationBar from "@/components/header/navigation-bar";

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
      <body className={TWKEverett.className}>
        <ActionsBar
          price={Math.random() * 1000}
          change={Math.random()}
          dailyVolume={Math.random() * 10 ** 7}
          marketCap={Math.random() * 10 ** 10}
        />
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}

export default Layout;
