import { DATA, KEYS_EN, KEYS_RU } from "./constants.js";
import { Node, Button, ButtonNumber, TextArea } from "./class.js";

const BODY = document.querySelector("body");
BODY.classList.add("wrapper");

let textArea = new TextArea(BODY, ["text-area"]);

for (let i = 0; i < 5; i++) {
  new Node(BODY, "div", ["continer"]);
}
const continer = document.querySelectorAll(".continer");

for (let i = 0; i < continer.length; i++) {
  let countKey = DATA.countKey[i];
  for (let j = 0; j < countKey; j++) {
    typeof KEYS_EN[i][j] !== "string"
      ? new ButtonNumber(
          continer[i],
          KEYS_EN[i][j][0],
          KEYS_EN[i][j][1],
          DATA[i][j],
          (e) => textArea.add(e.target.innerText) //выделить первый символ, или второй
        )
      : new Button(continer[i], KEYS_EN[i][j], DATA[i][j], (e) =>
          textArea.add(e.target.innerText)
        );
  }
}

function handle(e) {
  textArea.add(e.key);
}

// сделать класс экрана с методаи - добавить, удалить и тд
