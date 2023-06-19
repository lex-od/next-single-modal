import { ChangeEvent, FC, useRef, useState } from "react";
import clsx from "clsx";
import { ChevronDownIcon } from "@/assets/inline-svg";
import { useSelect } from "@/hooks";
import css from "./Select.module.scss";

export interface ISelectOption {
  id: number | string;
  name: string;
  [key: string]: any;
}
interface ISelect {
  labelText: string;
  options: ISelectOption[] | null;
  currentOption: ISelectOption | null;
  onChange: (option: ISelectOption) => void;
  className?: string;
  isError?: boolean;
}

export const Select: FC<ISelect> = ({
  labelText,
  options,
  currentOption,
  onChange,
  className,
  isError,
}) => {
  const { open, setOpen, triggerRef, dropRef } = useSelect();
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCurrentBtnClick = () => {
    setOpen((state) => !state);
    inputRef.current?.focus();
  };
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setOpen(true);
  };
  const handleChange = (option: ISelectOption) => {
    setOpen(false);
    onChange(option);
  };

  return (
    <div
      className={clsx(css.select, className, {
        "is-open": open,
        "is-error": isError,
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
            value={search}
            onChange={handleSearch}
            ref={inputRef}
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
                <li className="option-item" key={option.id}>
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
                <p className="not-found">Options not found</p>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
