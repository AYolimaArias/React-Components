import * as React from "react";
import s from "./ColorGame.module.css";
import { getRandomColors, getStatus, rgbString, statusMessage } from "./utils";

function ColorGame() {
  let numOfColors = 6;
  let colors = getRandomColors(numOfColors);
  let attempts = [];

  const target = Math.floor(Math.random() * colors.length);

  function handleReset() {
    attempts = [];
    colors = getRandomColors(numOfColors);
  }

  function handleChangeNumber(event) {
    numOfColors = event.target.value;
    attempts = [];
    colors = getRandomColors(numOfColors);
  }

  const status = getStatus(attempts, target, numOfColors);

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Color Game</h1>
      <p className={s.description}>
        Guess which color correspond to the following RGB code
      </p>

      <div className={s["rgb-wrapper"]}>{rgbString(colors[target])}</div>
      <div className={s.dashboard}>
        <div className={s["number-input"]}>
          <label htmlFor="colors"># Colors</label>
          <input
            id="colors"
            type="number"
            value={numOfColors}
            onChange={handleChangeNumber}
            step={3}
            min={3}
            max={9}
          />
        </div>
        <p className={s["game-status"]}>{statusMessage[status]}</p>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div className={s.squares}>
        {colors.map((color, index) => {
          const backgroundColor = rgbString(color);
          const opacity = attempts.includes(index) ? "0" : "100";

          return (
            <button
              key={index}
              style={{ backgroundColor, opacity }}
              onClick={() => {
                /* completar */
              }}
              className={s.square}
            ></button>
          );
        })}
      </div>
    </div>
  );
}

export default ColorGame;
