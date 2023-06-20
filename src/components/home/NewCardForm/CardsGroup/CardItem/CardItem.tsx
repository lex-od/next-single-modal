import { Input } from "@/components/ui/Input/Input";
import { CreditCardIcon } from "@/assets/inlineSvg";
import css from "./CardItem.module.scss";

export const CardItem = () => {
  return (
    <li className={css.cardItem}>
      <p>Card Status: None</p>

      <Input
        labelText="Card Number*"
        labelClassName={css.inputLabel}
        icon={CreditCardIcon}
        placeholder="Number"
      />
      <Input
        labelText="Card Holder*"
        labelClassName={css.inputLabel}
        placeholder="Name"
      />
    </li>
  );
};
