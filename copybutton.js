// export default 
class CopyButton extends PIXI.Container {
    constructor(text, width, height, x, y) {
        super();
        this.button = new PIXI.Graphics();
        this.button.beginFill(0x3B0242);
        this.button.drawRoundedRect(0, 0, width, height, 10);
        this.button.endFill();
        this.button.x = x;
        this.button.y = y;
        this.addChild(this.button);

        this.button.interactive = true;
        this.button.buttonMode = true;
    
        this.text = new PIXI.Text(text, {
          fontFamily: "Arial",
          fontSize: 18,
          fill: 0xffffff,
          align: "center"
        });
        this.text.x = x + width / 2;
        this.text.y = y + height / 2;
        this.text.anchor.set(0.5);
        this.addChild(this.text);
    
        this.text.interactive = true;
        this.text.buttonMode = true;

        this.text
        .on("pointerover", this.onHover.bind(this))
        .on("pointerout", this.onOut.bind(this))
        .on("pointerdown", this.onClick.bind(this));   
      }
    
      onHover() {
        this.text.style.fill = 0xff0000;

      }
    
      onOut() {
        this.text.style.fill = 0xffffff;
      }

      onClick() {
        const copyText = textInputBox.text.text;

        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText);

        // Alert the copied text
        alert("Copied the text: " + copyText);
      }
  }