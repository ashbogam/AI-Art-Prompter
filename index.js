// const log = console.log;
// import * from '/.button';

let promptTypes= ['Emotion', 'Subject', 'Scene','Style'];
let emotionTypes= ['ecstatic', 'happy', 'sad', 'excited', 'angry', 'bored', 'curious', 'confused', 'amused', 'scared', 'surprised', 'calm', 'anxious', 'joyful', 'proud'];
let subjectTypes=['zombie','dog', 'Popeye','Garfield', 'Ariel', 'Batman', 'Tom', 'Jerry', 'Tweety', 'Elephant', 'Dolphin', 'Rabbit', 'Squirrel', 'Cat', 'Koala'];
let sceneTypes= ['sunset', 'sunrise', 'dawn', 'rainy', 'snowy', 'stormy','foggy','windy','apocalyptic'];
let styleTypes = ['painting', '3D', 'artistic','abstract','neon','sketch', 'oil painting','cartoonise','poster','watercolor'];

let final_selections=[];
let buttonObjects=[];

let app = new PIXI.Application({backgroundColor:0x5F0763, resizeTo: window});
document.body.appendChild(app.view);

// PIXI.Loader.shared.add("background", "/assets/background.jpeg").load((loader, resources) => {
//     //Create a new sprite with the background image
//     const background = new PIXI.Sprite(resources.background.texture);
  
//     //Set the sprite's anchor point to the center
//     background.anchor.set(0.5);
  
//     //Position the sprite in the center of the stage
//     background.x = app.screen.width / 2;
//     background.y = app.screen.height / 2;
  
//     //Add the sprite to the stage
//     app.stage.addChild(background);
//   });

// const textbox = new TextBox(200, 100, 'Hello World!');
// app.stage.addChild(textbox);

const text = new PIXI.Text("AI Art Prompter", {
    fontFamily: "Roboto",
    fontSize: 36,
    fill: 0xffffff,
    align: "center"
  });
  
  // Set the position of the Text object
  text.x = app.screen.width / 2;
  text.y = 100;
  
  // Center the Text object's anchor point
  text.anchor.set(0.5);
  
  // Add the Text object to the PixiJS Application's stage
  app.stage.addChild(text);


let textInputBoxX = 500;
let textInputBoxY = 200;
let textInputBoxWidth = 1000;
let textInputBoxHeight = 50;
let textInputBox = new TextInputBox(textInputBoxX, textInputBoxY, textInputBoxWidth, textInputBoxHeight, 'Enter text here', new TextStyle({ fill: 'white' }));
app.stage.addChild(textInputBox);

const copyButtonWidth = 60;
const copyButtonHeight = 50;
const copyButtonX = textInputBoxX + textInputBoxWidth + 20;
const copyButtonY = textInputBoxY;
const copyButton = new CopyButton('COPY',copyButtonWidth, copyButtonHeight, copyButtonX, copyButtonY);
app.stage.addChild(copyButton);

const buttonWidth = 150;
const buttonSpace = (textInputBoxWidth-(promptTypes.length*buttonWidth))/(promptTypes.length-1);
// const buttonWidth = (textInputBoxWidth/promptTypes.length) - buttonSpace;
const buttonHeight = 50;
const buttonX = textInputBoxX;
const buttonY = textInputBoxY + 100;

for (let i = 0; i < promptTypes.length; i++) {
    const button = new Button(promptTypes[i], buttonWidth, buttonHeight, buttonX + i*(buttonWidth+buttonSpace), buttonY);
    app.stage.addChild(button);
}