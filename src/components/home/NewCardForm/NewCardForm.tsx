// Под форму сделал классическую верстку, без библиотек, т. к. функционала формы нет в т/з
// div.scrollWrap нужен для отступа от скролла, до правого края формы (по макету)

import { FC } from "react";
import { Input } from "@/components/ui/Modal/Input/Input";
import { CreditCardIcon } from "@/assets/inline-svg";
import css from "./NewCardForm.module.scss";

interface INewCardForm {
  onClose: () => void;
}

export const NewCardForm: FC<INewCardForm> = ({ onClose }) => {
  return (
    <form className={css.form}>
      <div className={css.scrollWrap}>
        <div className={css.topWrap}>
          <h2>Create new Card</h2>

          <Input
            label="Card Number*"
            placeholder="Number"
            icon={CreditCardIcon}
          />
        </div>

        <div className={css.submitGroup}>Submit group</div>
      </div>
    </form>
  );
};
