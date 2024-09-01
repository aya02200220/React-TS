import React, {
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from "react";

type ButtonProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

const ButtonComponent = <C extends ElementType>({
  as,
  children,
  ...props
}: ButtonProps<C>) => {
  const Component = as || "div";
  return <Component {...props}>{children}</Component>;
};

export default ButtonComponent;
