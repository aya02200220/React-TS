import React, { type ReactNode } from "react";

type HeaderProps = {
  image: { src: string; alt: string };
  children: ReactNode;
};

const Header = ({ image, children }: HeaderProps) => {
  return (
    <div className="flex flex-col items-center">
      <img
        className="h-[100px] flex items-center"
        src={image.src}
        alt={image.alt}
      />
      {children}
    </div>
  );
};

export default Header;
