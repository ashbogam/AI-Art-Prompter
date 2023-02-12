class TextBox extends PIXI.Container {
  constructor(width, height, text, style) {
    super();
    
    this.width = width;
    this.height = height;
    this.style = style || new PIXI.TextStyle({
      fontFamily: 'Arial',
      fontSize: 24,
      fill: 'red'
    });
    
    this.createBackground();
    this.createText(text);
  }
  
  createBackground() {
    this.background = new PIXI.Graphics();
    this.background.beginFill(0x000000, 0.5);
    this.background.drawRoundedRect(0, 0, this.width, this.height, 10);
    this.background.endFill();
    
    this.addChild(this.background);
  }
  
  createText(text) {
    this.text = new PIXI.Text(text, this.style);
    this.text.x = 10;
    this.text.y = 10;
    
    this.addChild(this.text);
  }
}

// how to use
// const textbox = new TextBox(200, 100, 'Hello World!');
// stage.addChild(textbox);