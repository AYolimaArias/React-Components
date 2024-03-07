import s from "./Home.module.css";
import reactIconUrl from "../../assets/react-icon-lg.svg";

function Home() {
  return (
    <div className={s.wrapper}>
      <img src={reactIconUrl} />
      <h1 className={s.title}>React Evaluation</h1>
      <p className={s.name}>Nombre Apellido</p>
      <div className={s.buttons}>
        <button
          onClick={() => {
            /* completar */
          }}
        >
          Color Game
        </button>
        <button
          onClick={() => {
            /* completar */
          }}
        >
          Doable
        </button>
      </div>
    </div>
  );
}

export default Home;
