// Под форму сделал классическую верстку, без библиотек, т. к. функционала формы нет в т/з

import { FC } from "react";
import css from "./NewCardForm.module.scss";
import { LegalEntityGroup } from "./LegalEntityGroup/LegalEntityGroup";
import { CardAccountGroup } from "./CardAccountGroup/CardAccountGroup";
import { CardsGroup } from "./CardsGroup/CardsGroup";
import { TitleGroup } from "./TitleGroup/TitleGroup";

interface INewCardForm {
  onClose: () => void;
}

export const NewCardForm: FC<INewCardForm> = ({ onClose }) => {
  return (
    <form className={css.form} onSubmit={(e) => e.preventDefault()}>
      <div className={css.scrollWrap}>
        <div>
          <TitleGroup onClose={onClose} />

          <div className={css.fieldsWrap}>
            <LegalEntityGroup />
            <CardAccountGroup />
            <CardsGroup />
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
