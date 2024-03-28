"use client";

import * as Menu from "@radix-ui/react-navigation-menu";
import * as LucideIcon from "@/components/lucide-icon";

function NavigationMenu() {
  return (
    <Menu.Root>
      <Menu.List className="flex items-center gap-x-11 text-white font-medium text-base">
        <Menu.Item>
          <Menu.Trigger className="flex items-center gap-x-1 text-center whitespace-nowrap hover:opacity-90 active:opacity-95">
            Subnets <LucideIcon.Dynamic size={20} name="chevron-down" />
          </Menu.Trigger>
        </Menu.Item>
        <Menu.Item>
          <Menu.Trigger className="flex items-center gap-x-1 text-center whitespace-nowrap hover:opacity-90 active:opacity-95">
            Validators <LucideIcon.Dynamic size={20} name="chevron-down" />
          </Menu.Trigger>
        </Menu.Item>
        <Menu.Item>
          <Menu.Trigger className="flex items-center gap-x-1 text-center whitespace-nowrap hover:opacity-90 active:opacity-95">
            Developers <LucideIcon.Dynamic size={20} name="chevron-down" />
          </Menu.Trigger>
        </Menu.Item>
        <Menu.Item>
          <Menu.Trigger className="flex items-center gap-x-1 text-center whitespace-nowrap hover:opacity-90 active:opacity-95">
            Resources <LucideIcon.Dynamic size={20} name="chevron-down" />
          </Menu.Trigger>
        </Menu.Item>
      </Menu.List>
    </Menu.Root>
  );
}

export default NavigationMenu;
