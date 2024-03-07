import s from "./Home.module.css";
import reactIconUrl from "../../assets/react-icon-lg.svg";

function Home({ setPage }) {
  return (
    <div className={s.wrapper}>
      <img src={reactIconUrl} />
      <h1 className={s.title}>React Evaluation</h1>
      <p className={s.name}>Angélica Arias</p>
      <div className={s.buttons}>
        <button
          onClick={() => {
            setPage("/color-game");
          }}
        >
          Color Game
        </button>
        <button
          onClick={() => {
            setPage("/doable");
          }}
        >
          Doable
        </button>
      </div>
    </div>
  );
}

export default Home;
