import { FC } from "react";
import clsx from "clsx";
import css from "./Input.module.scss";

type TInput = {
  labelText: string;
  icon: FC<React.SVGAttributes<SVGElement>>;
  isError?: boolean;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Input: FC<TInput> = ({
  labelText,
  icon: Icon,
  isError,
  placeholder,
  ...inputProps
}) => {
  return (
    <label className={clsx(css.label, { [css.isError]: isError })}>
      <Icon className={css.icon} />

      <span className={css.inputWrap}>
        <input
          className={css.input}
          placeholder={placeholder || " "}
          {...inputProps}
        />

        <span className={css.labelText}>{labelText}</span>
      </span>
    </label>
  );
};
