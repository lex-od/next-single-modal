import { FC } from "react";
import clsx from "clsx";
import css from "./Select.module.scss";
import { ChevronDownIcon } from "@/assets/inline-svg";

type TSelect = {
  labelText: string;
  className?: string;
  isError?: boolean;
  inputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
};

export const Select: FC<TSelect> = ({
  labelText,
  className,
  isError,
  inputProps = {},
}) => {
  return (
    <div
      className={clsx(css.select, className, {
        "is-error": isError,
      })}
    >
      <label className="label" role="button" onClick={() => null}>
        <span className="input-wrap">
          <input className="input" placeholder="Search" {...inputProps} />
          <span className="label-text">{labelText}</span>
        </span>

        <ChevronDownIcon className="arrow-icon" />
      </label>

      <div className="dropdown" style={{ height: 156 }}>
        Dropdown
      </div>
    </div>
  );
};
