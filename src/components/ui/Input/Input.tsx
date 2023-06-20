import { FC } from "react";
import clsx from "clsx";
import css from "./Input.module.scss";

// Объединяем пропы компонента с пропами инпута -
// поонядобятся, чтобы интегрировать в библиотечную форму.
type TInput = {
  labelText: string;
  labelClassName?: string;
  icon?: FC<React.SVGAttributes<SVGElement>>;
  isError?: boolean;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

// В переиспользуемых компонентах задаю один, "верхний", уникальный класс,
// а вложенные - глобальные, чтобы можно было (при необходимости)
// переопределить стили в родительском компоненте
export const Input: FC<TInput> = ({
  labelText,
  labelClassName,
  icon: Icon,
  isError,
  placeholder = " ",
  ...inputProps
}) => {
  return (
    <label
      className={clsx(css.label, labelClassName, {
        "is-error": isError,
      })}
    >
      {Icon && <Icon className="icon" />}

      <span className="input-wrap">
        <input className="input" placeholder={placeholder} {...inputProps} />

        <span className="label-text">{labelText}</span>
      </span>
    </label>
  );
};
