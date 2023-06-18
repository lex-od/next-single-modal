import { FC } from "react";
import clsx from "clsx";
import css from "./Input.module.scss";

type TInput = {
  labelText: string;
  icon: FC<React.SVGAttributes<SVGElement>>;
  labelClassName?: string;
  isError?: boolean;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Input: FC<TInput> = ({
  labelText,
  icon: Icon,
  labelClassName,
  isError,
  placeholder,
  ...inputProps
}) => {
  return (
    <label
      className={clsx(css.label, labelClassName, {
        "is-error": isError,
      })}
    >
      <Icon className={"icon"} />

      <span className={"input-wrap"}>
        <input
          className={"input"}
          placeholder={placeholder || " "}
          {...inputProps}
        />

        <span className={"label-text"}>{labelText}</span>
      </span>
    </label>
  );
};
