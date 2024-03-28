import type { Metadata } from "next";
import { TWKEverett } from "@/assets/fonts";
import "./globals.css";
import ActionsBar from "@/components/header/actions-bar";
import NavigationBar from "@/components/header/navigation-bar";
import Footer from "@/components/footer";
import Header from "@/components/header";
import classNames from "classnames";

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
      <body
        className={classNames(
          TWKEverett.className,
          "w-screen min-h-screen h-full flex flex-col",
        )}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default Layout;
