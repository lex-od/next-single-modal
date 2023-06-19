// Под форму сделал классическую верстку, без библиотек, т. к. функционала формы нет в т/з
// div.scrollWrap нужен для отступа от скролла, до правого края формы (по макету)

import { FC, useState } from "react";
import { Input } from "@/components/ui/Input/Input";
import { ISelectOption, Select } from "@/components/ui/Select/Select";
import { InformationCircleIcon } from "@/assets/inline-svg";
import { businessDivisionOptions } from "@/mockedData/selectOptions";
import css from "./NewCardForm.module.scss";

interface INewCardForm {
  onClose: () => void;
}

export const NewCardForm: FC<INewCardForm> = ({ onClose }) => {
  const [businessDivision, setBusinessDivision] =
    useState<ISelectOption | null>(null);

  return (
    <form className={css.form}>
      <div className={css.scrollWrap}>
        <div className={css.topWrap}>
          <h2>Create new Card</h2>

          <Input
            labelText="Card Number*"
            labelClassName={css.inputLabel}
            icon={InformationCircleIcon}
            placeholder="Number"
          />

          <Select
            labelText="Business Division*"
            options={businessDivisionOptions}
            currentOption={businessDivision}
            onChange={setBusinessDivision}
          />
        </div>

        <div className={css.submitGroup}>Submit group</div>
      </div>
    </form>
  );
};
