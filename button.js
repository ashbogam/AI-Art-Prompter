// export default 
class Button extends PIXI.Container {
    constructor(text, width, height, x, y) {
        super();
        this.button = new PIXI.Graphics();
        this.button.beginFill(0x000000);
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
          fill: 0xFFFFFF,
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
        // this.button.beginFill(0x808080);
        // this.button.endFill();

        this.text.style.fill = 0xFF0000;

      }
    
      onOut() {
        // this.button.beginFill(0x000000);
        // this.button.endFill();

        this.text.style.fill = 0xFFFFFF;
      }

      populateButtons(input_array){
        const buttonWidth = 95;
        const buttonSpace = 15;
        const buttonHeight = 50;
        const buttonX = textInputBoxX;
        const buttonY = textInputBoxY + 200;

        for (let i = 0; i < input_array.length; i++) {
            const newX =  buttonX + i*(buttonWidth+buttonSpace);
            if (newX+buttonWidth>textInputBoxWidth+textInputBoxX)
            {
                for (let j=0; j<input_array.length-i;j++)
                {
                  const newX =  buttonX + j*(buttonWidth+buttonSpace);
                  const button = new Button(input_array[i], buttonWidth, buttonHeight,newX, buttonY+70);
                  app.stage.addChild(button);
                  buttonObjects.push(button);
                }
            }
            else
            {
            const button = new Button(input_array[i], buttonWidth, buttonHeight,newX, buttonY);
            app.stage.addChild(button);
            buttonObjects.push(button);
            }
            
        }
      }

      onClick() {
        if(buttonObjects.length>0){
          for(let i = 0; i < buttonObjects.length; i++){
          app.stage.removeChild(buttonObjects[i])
          }
          buttonObjects=[];
        }
        if(this.text['_text'] == "Emotion"){
          this.populateButtons(emotionTypes)
          
        }else if(this.text['_text'] == "Subject"){
          this.populateButtons(subjectTypes)

        }else if(this.text['_text'] == "Scene"){
          this.populateButtons(sceneTypes)

        }else if(this.text['_text'] == "Style"){
          this.populateButtons(styleTypes)

        }else{
          textInputBox.placeholder.visible = false;
          textInputBox.text.text += " "+this.text['_text']
          final_selections.push(this.text['_text'])
          console.log(final_selections)
        }
      }
  }