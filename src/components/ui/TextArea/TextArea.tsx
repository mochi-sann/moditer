import React from "react";

export type TextAreaProps = {} & JSX.IntrinsicElements["textarea"];

export const TextArea: React.FC<TextAreaProps> = (props) => {
  return <textarea {...props} />;
};
