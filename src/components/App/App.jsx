import * as React from "react";
import clsx from "clsx";
import s from "./App.module.css";
import Home from "../Home";
import ColorGame from "../ColorGame";
import Doable from "../Doable";

import reactIconUrl from "../../assets/react-icon.svg";

const navigation = [
  {
    name: "Color Game",
    to: "/color-game",
  },
  {
    name: "Doable",
    to: "/doable",
  },
];

function App() {
  const [page, setPage] = React.useState("/");

  return (
    <div className={s.wrapper}>
      <header className={s.header}>
        <button
          className={s.logo}
          onClick={() => {
            /* completar */
          }}
        >
          <img src={reactIconUrl} /> React Evaluation
        </button>
        <nav className={s.nav}>
          {navigation.map((item) => (
            <button
              key={item.to}
              className={clsx(s["nav-item"], page === item.to && s.current)}
              onClick={() => {
                /* completar */
              }}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </header>
      <main className={s.main}>
        {/* Utiliza la variable 'page' para renderizar solo uno de los siguientes */}
        <Home />
        <ColorGame />
        <Doable />
      </main>
    </div>
  );
}

export default App;
