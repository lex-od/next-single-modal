import { useState } from "react";
import { ISelectOption, Select } from "@/components/ui/Select/Select";
import { bankOptions, currencyOptions } from "@/mockedData/selectOptions";
import { Input } from "@/components/ui/Input/Input";
import { InformationCircleIcon } from "@/assets/inlineSvg";
import css from "./CardAccountGroup.module.scss";

export const CardAccountGroup = () => {
  const [currency, setCurrency] = useState<ISelectOption | null>(null);
  const [bank, setBank] = useState<ISelectOption | null>(null);

  return (
    <div className={css.cardAccountGroup}>
      <h3 className={css.title}>Card account</h3>

      <div className={css.fields}>
        <Input
          labelText="IBAN account*"
          labelClassName={css.ibanLabel}
          icon={InformationCircleIcon}
          placeholder="Number"
        />
        <Select
          labelText="Currency*"
          options={currencyOptions}
          currentOption={currency}
          onChange={setCurrency}
          className={css.currencySelect}
        />
        <Select
          labelText="Choose Bank*"
          options={bankOptions}
          currentOption={bank}
          onChange={setBank}
          className={css.bankSelect}
        />
      </div>
    </div>
  );
};
