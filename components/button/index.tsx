import { forwardRef, type ForwardedRef, type ReactElement } from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import classNames from "classnames";

export interface ButtonProps {
  asChild?: boolean;
  iconLeft?: ReactElement;
  iconRight?: ReactElement;
  children: ReactElement | string;
  inverted?: boolean;
}

function Button(props: ButtonProps, ref: ForwardedRef<any>) {
  const {
    asChild = false,
    inverted = false,
    iconLeft,
    iconRight,
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
        inverted ? "bg-[#D9D9D9] text-black" : "bg-[#1F1F1F] text-white",
      )}
    >
      {iconLeft}
      <Slottable>{children}</Slottable>
      {iconRight}
    </Comp>
  );
}

export default forwardRef(Button);
