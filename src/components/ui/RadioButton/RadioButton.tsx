import { FC, useId } from "react";
import css from "./RadioButton.module.scss";

// Аналогично с Input, пропы элемента - для формы
type TRadioButton = {
  label: string;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const RadioButton: FC<TRadioButton> = ({ label, ...inputProps }) => {
  const id = useId();

  return (
    <div className={css.wrap}>
      <input id={id} type="radio" className={css.input} {...inputProps} />

      <label htmlFor={id} className={css.label}>
        {label}
      </label>
    </div>
  );
};
