const BODY = document.querySelector("body");
const langKeysEn = {
  numbers: [
    ["!", "1"],
    ["@", "2"],
    ["#", "3"],
    ["$", "4"],
    ["%", "5"],
    ["^", "6"],
    ["&", "7"],
    ["*", "8"],
    ["(", "9"],
    [")", "0"],
    ["_", "-"],
    ["+", "="],
  ],
  0: [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    ["{", "["],
    ["}", "]"],
    ["|", "\\"],
  ],
  1: ["a", "s", "d", "f", "g", "h", "j", "k", "l", [":", ";"], ['"', "'"]],
  2: ["z", "x", "c", "v", "b", "n", "m", ["<", ","], [">", "."], ["?", "/"]],
};

const langKeysRu = {
  numbers: [
    ["!", "1"],
    ['"', "2"],
    ["№", "3"],
    [";", "4"],
    ["%", "5"],
    [":", "6"],
    ["?", "7"],
    ["*", "8"],
    ["(", "9"],
    [")", "0"],
    ["_", "-"],
    ["+", "="],
  ],
  0: ["й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", ["/", "\\"]],
  1: ["ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э"],
  2: ["я", "ч", "с", "м", "и", "т", "ь", "б", "ю", [",", "."]],
};

class Node {
  constructor(parent, tag, nodeClass) {
    const node = document.createElement(tag);
    node.classList.add(...nodeClass);
    parent.append(node);
    this.node = node;
  }
}

class Button extends Node {
  constructor(parent, text, nodeClass, onClick) {
    super(parent, "button", nodeClass);
    this.node.textContent = text;
    this.node.onclick = () => {
      onClick();
    };
  }
}

class ButtonNumber extends Button {
  constructor(parent, text1, text2, nodeClass, onClick) {
    super(parent, text1, nodeClass, onClick);
    this.node.innerHTML = `<span class="text-up">${text1}</span><span class="text-down">${text2}</span>`;
  }
}

//const wrapper = new Node("div", BODY, ["wrapper"]);
const textArea = new Node(BODY, "textarea", ["text-area"]);
//const keyBoard = new Node(BODY, "div", ["keyboard"]);

BODY.classList.add("wrapper");

for (let i = 0; i < 5; i++) {
  new Node(BODY, "div", ["continer"]);
}

const continer = document.querySelectorAll(".continer");

for (let i = 0; i < continer.length; i++) {
  for (let j = 0; j < 14; j++) {
    new ButtonNumber(continer[i], "B", "E", ["button", "button-num"], () =>
      alert("Hi")
    );
  }
}
