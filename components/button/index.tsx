import { ForwardedRef } from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";

export interface ButtonProps {
  asChild?: boolean;
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
  children: React.ReactElement;
}

function Button(props: ButtonProps, ref: ForwardedRef<any>) {
  const { asChild = false, iconLeft, iconRight, children, ...rest } = props;
  const Comp = asChild ? Slot : "button";

  return (
    <Comp {...rest} ref={ref}>
      {iconLeft}
      <Slottable>{children}</Slottable>
      {iconRight}
    </Comp>
  );
}

export default Button;
