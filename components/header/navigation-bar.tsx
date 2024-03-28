import Image from "next/image";
import GlobalSearch from "@/components/global-search";
import NavigationMenu from "@/components/header/navigation-menu";
import Button from "@/components/button";
import * as LucideIcon from "@/components/lucide-icon";
import { ComponentProps } from "react";
import classNames from "classnames";

function NavigationBar() {
  return (
    <section className="w-full h-[92px] flex items-center px-8 gap-x-16">
      <Image width={120} height={40} src="/tao-fname.png" alt="Taostats Logo" />
      <GlobalSearch />
      <div className="grow" />
      <NavigationMenu />
      <Button
        variant="tertiary"
        iconLeft={<LucideIcon.Dynamic name="wallet" size={17} />}
      >
        Connect
      </Button>
    </section>
  );
}

NavigationBar.Placeholder = (props: ComponentProps<"div">) => (
  <div {...props} className={classNames(props.className, "w-full h-[92px]")} />
);

export default NavigationBar;
