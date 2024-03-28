import { forwardRef, type ForwardedRef, type ReactElement } from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import classNames from "classnames";

export interface ButtonProps {
  asChild?: boolean;
  iconLeft?: ReactElement;
  iconRight?: ReactElement;
  variant?: "primary" | "secondary" | "tertiary";
  children: ReactElement | string;
  className?: string;
}

function Button(props: ButtonProps, ref: ForwardedRef<any>) {
  const {
    asChild = false,
    variant = "primary",
    iconLeft,
    iconRight,
    className,
    children,
    ...rest
  } = props;
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      {...rest}
      ref={ref}
      className={classNames(
        "flex items-center gap-x-3 py-1.5 px-3.5 rounded-md border border-[#252525] drop-shadow text-sm font-medium text-center whitespace-nowrap hover:opacity-90 active:opacity-95",
        {
          "bg-[#1F1F1F] text-white": variant == "primary",
          "bg-[#D9D9D9] text-black": variant == "secondary",
          "bg-[#2E2E2E] text-[#909090]": variant == "tertiary",
        },
        className,
      )}
    >
      {iconLeft}
      <Slottable>{children}</Slottable>
      {iconRight}
    </Comp>
  );
}

export default forwardRef(Button);
