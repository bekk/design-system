import React from "react";
import { c } from "classy-ui/macro";

export const Hello: React.FC<{ text: string }> = ({ text }) => {
  return <h1 className={c("background-color-gray-400")}>{text}</h1>;
};
