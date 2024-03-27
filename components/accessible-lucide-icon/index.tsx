import dynamic from "next/dynamic";

import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";

import * as AccessibleIcon from "@radix-ui/react-accessible-icon";

interface IconProps extends LucideProps {
  name: keyof typeof dynamicIconImports;
  label: string;
}

function AccessibleLucideIcon({ name, label, ...props }: IconProps) {
  const LucideIcon = dynamic(dynamicIconImports[name]);

  return (
    <AccessibleIcon.Root label={label}>
      <LucideIcon {...props} />
    </AccessibleIcon.Root>
  );
}

export default AccessibleLucideIcon;
