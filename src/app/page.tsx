import { NewCardButton } from "@/components/home/NewCardButton/NewCardButton";
import css from "./page.module.scss";

// Проект делаю на Next.js, т. к. так рекомендуют свежие React-доки
// https://react.dev/learn/start-a-new-react-project
// (хотя для текущей задачи - необходимости нет)

export default function Home() {
  return (
    <main className={css.main}>
      <h1>Click to open modal...</h1>

      {/* Кнопка в отдельном компоненте, т. к. он уже будет являться клиентским */}
      <NewCardButton />
    </main>
  );
}
