import { NewCardButton } from "@/components/home/NewCardButton/NewCardButton";
import css from "./page.module.scss";

export default function Home() {
  return (
    <main className={css.main}>
      <h1>Click to open modal...</h1>

      <NewCardButton />
    </main>
  );
}
