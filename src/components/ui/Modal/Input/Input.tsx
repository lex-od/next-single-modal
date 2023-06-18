import { FC } from "react";
import css from "./Input.module.scss";

interface IInput {
  label: string;
  placeholder: string;
  icon: FC<React.SVGAttributes<SVGElement>>;
}

export const Input: FC<IInput> = ({ label, placeholder, icon: Icon }) => {
  return (
    <label className={css.label}>
      <Icon />

      <span className={css.inputWrap}>
        <input className={css.input} placeholder={placeholder} />

        {/* <span className={css.labelText}>{label}</span> */}
      </span>
    </label>
  );
};
