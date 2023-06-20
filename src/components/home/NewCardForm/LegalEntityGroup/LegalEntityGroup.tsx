import { useState } from "react";
import { ISelectOption, Select } from "@/components/ui/Select/Select";
import {
  businessDivisionOptions,
  legalEntityOptions,
} from "@/mockedData/selectOptions";
import css from "./LegalEntityGroup.module.scss";

export const LegalEntityGroup = () => {
  const [businessDivision, setBusinessDivision] =
    useState<ISelectOption | null>(null);
  const [legalEntity, setLegalEntity] = useState<ISelectOption | null>(null);

  return (
    <div className={css.legalEntityGroup}>
      <h3 className={css.title}>
        Please choose the Legal entity & Busines Division
      </h3>

      <div className={css.fields}>
        <Select
          labelText="Business Division*"
          options={businessDivisionOptions}
          currentOption={businessDivision}
          onChange={setBusinessDivision}
        />
        <Select
          labelText="Legal entity*"
          options={legalEntityOptions}
          currentOption={legalEntity}
          onChange={setLegalEntity}
        />
      </div>
    </div>
  );
};
