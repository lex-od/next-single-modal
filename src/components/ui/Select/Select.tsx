import { FC, useRef } from "react";
import clsx from "clsx";
import { ChevronDownIcon } from "@/assets/inline-svg";
import { useSelect } from "@/hooks";
import css from "./Select.module.scss";

type TSelectOption = Record<string, any> & {
  id: number | string;
  name: string;
};

interface ISelect {
  labelText: string;
  options: TSelectOption[] | null;
  currentOption: TSelectOption | null;
  onChange: (option: TSelectOption) => void;
  className?: string;
  isError?: boolean;
  inputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}

export const Select: FC<ISelect> = ({
  labelText,
  options,
  currentOption,
  onChange,
  className,
  isError,
  inputProps = {},
}) => {
  const { open, setOpen, triggerRef, dropRef } = useSelect();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCurrentBtnClick = () => {
    setOpen((state) => !state);
    inputRef.current?.focus();
  };

  const handleChange = (option: TSelectOption) => {
    setOpen(false);
    onChange(option);
  };

  return (
    <div
      className={clsx(css.select, className, {
        "is-error": isError,
        "is-open": open,
      })}
    >
      <button
        className="current-button"
        onClick={handleCurrentBtnClick}
        ref={triggerRef}
        type="button"
        tabIndex={-1}
      >
        <span className="input-wrap">
          <input
            className="input"
            placeholder="Search"
            ref={inputRef}
            {...inputProps}
          />
          <span className="label-text">{labelText}</span>
        </span>

        <ChevronDownIcon className="arrow-icon" />
      </button>

      {open && (
        <div className="dropdown" ref={dropRef}>
          <ul className="option-list">
            {options?.length ? (
              options?.map((option) => (
                <li key={option.id}>
                  <button
                    type="button"
                    className="option-button"
                    onClick={() => handleChange(option)}
                  >
                    {option.name}
                  </button>
                </li>
              ))
            ) : (
              <li>
                <p className="no-results">No results</p>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
