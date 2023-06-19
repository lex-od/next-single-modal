import { FC, useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import { ChevronDownIcon } from "@/assets/inlineSvg";
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

  const filteredOptions = useMemo(() => {
    const lowSearch = search.trim().toLowerCase();
    return options?.filter(({ name }) =>
      name.toLowerCase().includes(lowSearch)
    );
  }, [options, search]);

  useEffect(() => {
    setSearch("");
  }, [open]);

  const handleCurrentBtnClick = () => {
    setOpen((state) => !state);
  };
  const handleOptionChange = (option: ISelectOption) => {
    setOpen(false);
    onChange(option);
  };

  return (
    <div
      className={clsx(css.select, className, {
        "is-current-option": currentOption,
        "is-open": open,
        "is-error": isError,
      })}
    >
      <button
        className="current-button"
        onClick={handleCurrentBtnClick}
        ref={triggerRef}
        type="button"
      >
        <span className="input-wrap">
          {!open && currentOption && (
            <span className="current-option">{currentOption.name}</span>
          )}
          {open && (
            <input
              className="input"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyUp={(e) => e.preventDefault()}
              autoFocus
            />
          )}
          <span className="label-text">{labelText}</span>
        </span>

        <ChevronDownIcon className="arrow-icon" />
      </button>

      {open && (
        <div className="dropdown" ref={dropRef}>
          <ul className="option-list">
            {filteredOptions?.length ? (
              filteredOptions.map((option) => (
                <li className="option-item" key={option.id}>
                  <button
                    type="button"
                    className="option-button"
                    onClick={() => handleOptionChange(option)}
                  >
                    {option.name}
                  </button>
                </li>
              ))
            ) : (
              <li className="option-item">
                <p className="not-found">Options not found</p>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
