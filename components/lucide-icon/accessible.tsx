import * as AccessibleIcon from "@radix-ui/react-accessible-icon";
import LucideDynamicIcon, {
  LucideDynamicIconProps,
} from "@/components/lucide-icon/dynamic";

export interface LucideAccessibleIconProps extends LucideDynamicIconProps {
  label: string;
}

function LucideAccessibleIcon({ label, ...props }: LucideAccessibleIconProps) {
  return (
    <AccessibleIcon.Root label={label}>
      <LucideDynamicIcon {...props} />
    </AccessibleIcon.Root>
  );
}

export default LucideAccessibleIcon;
