import { PlusIcon } from "@/assets/inlineSvg";
import css from "./CardsGroup.module.scss";
import { CardItem } from "./CardItem/CardItem";

export const CardsGroup = () => {
  return (
    <div className={css.cardAccountGroup}>
      <div className={css.titleGroup}>
        <h3>Cards</h3>

        <button type="button">
          <PlusIcon />
          Add new
        </button>
      </div>

      <ul className={css.cardList}>
        <CardItem />
        <CardItem />
      </ul>
    </div>
  );
};
