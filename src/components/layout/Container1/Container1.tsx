import { FC, ReactNode } from "react";

import css from "./container.module.scss";

interface IContainer {
  children: ReactNode;
}

export const Container: FC<IContainer> = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};
