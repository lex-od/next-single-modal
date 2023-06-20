// Под форму сделал классическую верстку, без библиотек, т. к. функционала формы нет в т/з

import { FC } from "react";
import { Input } from "@/components/ui/Input/Input";
import {
  CloseIcon,
  CreditCardIcon,
  DocumentIcon,
  InformationCircleIcon,
} from "@/assets/inlineSvg";
import css from "./NewCardForm.module.scss";
import { LegalEntityGroup } from "./LegalEntityGroup/LegalEntityGroup";

interface INewCardForm {
  onClose: () => void;
}

export const NewCardForm: FC<INewCardForm> = ({ onClose }) => {
  return (
    <form className={css.form} onSubmit={(e) => e.preventDefault()}>
      <div className={css.scrollWrap}>
        <div>
          <div className={css.titleGroup}>
            <h2>Create new Card</h2>
            <CreditCardIcon />
            <span>
              <DocumentIcon />
              New
            </span>
            <button type="button" onClick={onClose}>
              <CloseIcon />
            </button>
          </div>

          <div className={css.fieldsWrap}>
            <LegalEntityGroup />

            <Input
              labelText="Card Number*"
              labelClassName={css.inputLabel}
              icon={InformationCircleIcon}
              placeholder="Number"
            />
          </div>
        </div>

        <div className={css.submitGroup}>
          <button className={css.submitButton} type="submit" disabled>
            Save
          </button>
        </div>
      </div>
    </form>
  );
};
