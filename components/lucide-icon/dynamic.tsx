import dynamic from "next/dynamic";

import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";

export interface LucideDynamicIconProps extends LucideProps {
  name: keyof typeof dynamicIconImports;
}

function LucideDynamicIcon({ name, ...props }: LucideDynamicIconProps) {
  const LucideIcon = dynamic(dynamicIconImports[name]);

  return <LucideIcon {...props} />;
}

export default LucideDynamicIcon;
