const { Container, Graphics, Text, TextStyle } = PIXI;

class TextInputBox extends Container {
  constructor(x, y, width, height, placeholder, style) {
    super();
    this.x = x;
    this.y = y;

    this.graphics = new Graphics();
    this.graphics.lineStyle(2, 0x000000, 1);
    this.graphics.drawRect(0, 0, width, height);
    this.addChild(this.graphics);

    this.placeholder = new Text(placeholder, new TextStyle({ fill: 'gray' }));
    this.placeholder.x = 5;
    this.placeholder.y = (height - this.placeholder.height) / 2;
    this.addChild(this.placeholder);

    this.text = new Text('', style);
    this.text.x = 5;
    this.text.y = (height - this.text.height) / 2;
    this.addChild(this.text);

    this.interactive = true;
    this.buttonMode = true;
    this.on('pointerdown', this.focus.bind(this));
  }

  focus() {
    this.placeholder.visible = false;
    document.addEventListener('keydown', this.onKeyDown.bind(this));
  }

  onKeyDown(event) {
    if (event.key === 'Enter') {
      this.blur();
    } else if (event.key === 'Escape') {
      this.text.text = '';
      this.blur();
    } else if (event.key === 'Backspace') {
      this.text.text = this.text.text.substr(0, this.text.text.length - 1);
    } else {
      this.text.text += event.key;
    }
  }

  blur() {
    this.placeholder.visible = this.text.text.length === 0;
    document.removeEventListener('keydown', this.onKeyDown.bind(this));
  }

  copyText() {
    const textarea = document.createElement('textarea');
    textarea.value = this.text.text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
  }
}
