import React, {
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from "react";

type ButtonProps = {
  as: ElementType;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

const ButtonComponent = ({ as, children }: ButtonProps) => {
  const Component = as;
  return <Component>{children}</Component>;
};

export default ButtonComponent;
