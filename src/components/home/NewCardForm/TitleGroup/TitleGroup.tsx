import { FC } from "react";
import css from "./TitleGroup.module.scss";
import { CloseIcon, CreditCardIcon, DocumentIcon } from "@/assets/inlineSvg";

type ITitleGroup = {
  onClose: () => void;
};

export const TitleGroup: FC<ITitleGroup> = ({ onClose }) => {
  return (
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
  );
};
