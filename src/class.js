export class Node {
  constructor(parent, tag, nodeClass) {
    const node = document.createElement(tag);
    node.classList.add(...nodeClass);
    parent.append(node);
    this.node = node;
  }
}

export class Button extends Node {
  constructor(parent, text, nodeClass, onClick) {
    super(parent, "button", nodeClass);
    this.node.textContent = text;
    this.node.onclick = (e) => {
      onClick(e);
    };
  }
}

export class ButtonNumber extends Button {
  constructor(parent, text1, text2, nodeClass, onClick) {
    super(parent, text1, nodeClass, onClick);
    this.node.innerHTML = `<span class="text-up">${text1}</span><span class="text-down">${text2}</span>`;
  }
}

export class TextArea extends Node {
  constructor(parent, nodeClass) {
    super(parent, "textarea", nodeClass);
  }

  add(text) {
    this.node.value += text;
  }

  setPositionCursor(index) {
    this.node.selectionStart = index;
    this.node.selectionEnd = index;
  }

  backSpace() {
    let indexCursor = this.node.selectionStart;
    if (indexCursor === 0) {
      this.node.focus();
      return;
    } else {
      let text = this.node.value;
      this.node.value = "";
      this.node.value =
        text.slice(0, indexCursor - 1) + text.slice(indexCursor);
    }
    this.setPositionCursor(indexCursor - 1);
    this.node.focus();
  }

  delete() {
    let indexCursor = this.node.selectionStart;
    let text = this.node.value;
    if (indexCursor === text.length) {
      this.node.focus();
      return;
    } else {
      this.node.value = "";
      this.node.value =
        text.slice(0, indexCursor) + text.slice(indexCursor + 1);
    }
    this.setPositionCursor(indexCursor);
    this.node.focus();
  }

  getFocus() {
    this.node.focus();
  }
}
