import { DATA, KEYS_EN, KEYS_RU, KEYS } from "./constants.js";
import { Node, Button, ButtonNumber, TextArea } from "./class.js";

let shift = true;
let btnShift = false;
let language = true;

const BODY = document.querySelector("body");
BODY.classList.add("wrapper");

let textArea = new TextArea(BODY, ["text-area"]);

// document.addEventListener("keyup", function (event) {
//   //console.log("Key: ", event.key);
//   console.log("keyCode: ", event.keyCode);
// });

function writeKeyboard(shift, language) {
  new Node(BODY, "div", ["keyboard"]);
  const keyboard = document.querySelector(".keyboard");

  for (let i = 0; i < 5; i++) {
    new Node(keyboard, "div", ["continer"]);
  }
  const continer = document.querySelectorAll(".continer");

  let shiftUp = 0;
  if (language && shift) {
    shiftUp = 0;
  } else if (language && !shift) {
    shiftUp = 2;
  } else if (!language && shift) {
    shiftUp = 1;
  } else if (!language && !shift) {
    shiftUp = 3;
  }

  for (let i = 0; i < continer.length; i++) {
    let countKey = DATA.countKey[i];
    for (let j = 0; j < countKey; j++) {
      new Button(
        continer[i],
        getTextButton(KEYS[i][j], shiftUp),
        DATA[i][j],
        (e) => addEventListener(e),
        (y) => console.log(y.key)
      );
    }
  }
}

writeKeyboard(shift, language);

// function handle(e) {
//   console.log(e.key);
//   //textArea.add(e.key);
// }

function getTextButton(text, shiftIsUp) {
  if (typeof text === "string") {
    return text;
  } else if (text.length === 4) {
    return text[shiftIsUp];
  } else {
    //console.log(shiftIsUp);
    return shiftIsUp > 1 ? switchCase(text[shiftIsUp - 2]) : text[shiftIsUp];
  }
}

function addEventListener(event) {
  switch (event.target.innerText) {
    case "Tab":
      textArea.add("    ");
      textArea.getFocus();
      break;
    case "Backspace":
      textArea.backSpace();
      break;
    case "DEL":
      textArea.delete();
      break;
    case "Caps Lock":
      document.querySelector(".keyboard").remove();
      shift = !shift;
      writeKeyboard(shift, language);
      textArea.getFocus();
      break;
    case "ENTER":
      textArea.add("\n");
      textArea.getFocus();
      break;
    case "Shift":
      document.querySelector(".keyboard").remove();
      shift = !shift;
      btnShift = !btnShift;
      writeKeyboard(shift, language);

      // let btn = document.querySelectorAll(".btn-shift");

      // btn.forEach((el) => {
      //   el.classList.toggle("active");
      //   console.log(el);
      // });

      textArea.getFocus();
      break;
    case "Ctrl":
      textArea.getFocus();
      break;
    case "Alt":
      if (btnShift) {
        document.querySelector(".keyboard").remove();
        language = !language;
        writeKeyboard(shift, language);
      }
      btnShift = false;
      textArea.getFocus();
      break;
    case "":
      textArea.add(" ");
      textArea.getFocus();
      break;
    default:
      textArea.add(event.target.innerText);
      textArea.getFocus();
      break;
  }
}

function switchCase(_string) {
  return _string.toUpperCase() == _string
    ? _string.toLowerCase()
    : _string.toUpperCase();
}

// document.querySelectorAll(".button").forEach((el) => {
//   el.addEventListener("keyup", function (event) {
//     //   //console.log("Key: ", event.key);
//     console.log("keyCode: ", event.keyCode);
//   });
// });

console.log();

// сделать класс экрана с методаи - добавить, удалить и тд
