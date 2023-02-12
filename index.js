// const log = console.log;
// import * from '/.button';

let promptTypes= ['Emotion', 'Subject', 'Scene','Style'];
let emotionTypes= ['ecstatic', 'happy', 'sad', 'excited', 'angry', 'bored', 'curious', 'confused', 'amused', 'scared', 'surprised', 'calm', 'anxious', 'joyful', 'proud'];
let subjectTypes=['zombie','dog', 'Popeye','Garfield', 'Ariel', 'Batman', 'Tom', 'Jerry', 'Tweety', 'Elephant', 'Dolphin', 'Rabbit', 'Squirrel', 'Cat', 'Koala'];
let sceneTypes= ['sunset', 'sunrise', 'dawn', 'rainy', 'snowy', 'stormy','foggy','windy','apocalyptic'];
let styleTypes = ['painting', '3D', 'artistic','abstract','neon','sketch', 'oil painting','cartoonise','poster','watercolor'];

let final_selections=[];
let buttonObjects=[];

let app = new PIXI.Application({backgroundColor:0xFFFFFF, resizeTo: window});
document.body.appendChild(app.view);
// const textbox = new TextBox(200, 100, 'Hello World!');
// app.stage.addChild(textbox);
let textInputBoxX = 500;
let textInputBoxY = 100;
let textInputBoxWidth = 1000;
let textInputBoxHeight = 50;
let textInputBox = new TextInputBox(textInputBoxX, textInputBoxY, textInputBoxWidth, textInputBoxHeight, 'Enter text here', new TextStyle({ fill: 'black' }));
app.stage.addChild(textInputBox);

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