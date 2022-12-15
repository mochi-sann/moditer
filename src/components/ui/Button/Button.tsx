import React from "react";
import style from "./Button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  fullwidth?: boolean;
} & JSX.IntrinsicElements["button"];
const Button: React.FC<ButtonProps> = (props) => {
  const { children, fullwidth, ...buttonProps } = props;
  return (
    <button
      className={`${style.button} ${fullwidth && style.fullwidth}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
