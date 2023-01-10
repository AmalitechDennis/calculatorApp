//captures existing window theme
const useDark= window.matchMedia("(prefers-color-scheme: dark)");

let headerTexts= document.getElementById("header");
let textInput = document.getElementById("textval");
let solve= document.getElementById('calculate');
let delElement= document.getElementById('delete');
let resetButton= document.getElementById('clearScreen');
let theme1= document.getElementById('theme1');
let theme2= document.getElementById('theme2');
let theme3= document.getElementById('theme3');
let keypadArea= document.getElementById('keypad');
let themeSelectArea= document.getElementById("themeSelectorButton");
let buttons= document.getElementsByClassName('button');

//displays input keys on screen
function display(val){
    textInput.value+=val;
    textInput.value= insertComma(textInput.value);
}
//deletes element on screen
delElement.onclick = function(){
    textInput.value=textInput.value.slice(0,-1);
}
//displays calculted result
solve.onclick =function(){
    try{
        if(typeof eval(textInput.value) == "undefined"){
            clr();
        }else{
            let result=eval(textInput.value.replaceAll(',',''));//removes comma from digits for proper evaluation
            textInput.value= insertComma(result);//inserts comma back for display
        } 
    }catch(err){
        clr();
    }
}
//function to insert comma after 3 digits
function insertComma(num){
    let str = num.toString().split('.');
    if (str[0].length >= 4) {
        str[0] = str[0].replaceAll(',','');
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    return str.join('.');
}
//clears screen area
function clr(){
    textInput.value= "";
}
//css styles for darkTheme
function darkTheme(){
    document.documentElement.className='darkTheme';
    document.body.style.backgroundColor='#434A59';
    themeSelectArea.style.backgroundColor='#242D44';
    headerTexts.style.color='#FFF';
    theme1.style.backgroundColor='#D03F2F';
    theme2.style.backgroundColor='#242D44';
    theme3.style.backgroundColor='#242D44';
    textInput.style.backgroundColor='#181F33';
    textInput.style.color='#FFF';
    textInput.style.borderColor='#181F33';
    keypadArea.style.backgroundColor='#242D44';
    //for loop to style each button using className
    for (var i =0; i < buttons.length; i++){
        buttons[i].style.backgroundColor='#EAE3DC';
        buttons[i].style.color='#434A59';
        delElement.style.backgroundColor='#647198';
        delElement.style.color='#FFF';
        delElement.style.borderColor='#647198';
        delElement.style.boxShadow='0px 5px 2px #464f6a';
        solve.style.backgroundColor='#D03F2F';
        solve.style.color='#FFF';
        solve.style.borderColor='#D03F2F';
        solve.style.boxShadow='0px 5px 2px #922c21';
        resetButton.style.backgroundColor='#647198';
        resetButton.style.color='#FFF';
        resetButton.style.borderColor='#647198';
        resetButton.style.boxShadow='0px 5px 2px #464f6a';
    }
}
//css styles for lightTheme
function lightTheme(){
    document.documentElement.className='lightTheme';
    document.body.style.backgroundColor='#E6E6E6';
    themeSelectArea.style.backgroundColor='#D2CDCD';
    headerTexts.style.color='black';
    theme1.style.backgroundColor='#D2CDCD';
    theme2.style.backgroundColor='#D03F2F';
    theme3.style.backgroundColor='#D2CDCD';
    textInput.style.backgroundColor='#EEEEEE';
    textInput.style.color='black';
    textInput.style.borderColor='#EEEEEE';
    keypadArea.style.backgroundColor='#D2CDCD';
    //for loop to style each button using className
    for (var i =0; i < buttons.length; i++){
        buttons[i].style.backgroundColor='#E5E4E1';
        buttons[i].style.color='black';
        buttons[i].style.borderColor='#E5E4E1';
        buttons[i].style.boxShadow='0px 5px 2px #C1BFB8';
        delElement.style.backgroundColor='#378187';
        delElement.style.color='#FFF';
        delElement.style.borderColor='#378187';
        delElement.style.boxShadow='0px 5px 2px #214D51';
        solve.style.backgroundColor='#C85402';
        solve.style.color='#FFF';
        solve.style.borderColor='#C85402';
        solve.style.boxShadow='0px 5px 2px #7C3401';
        resetButton.style.backgroundColor='#378187';
        resetButton.style.color='#FFF';
        resetButton.style.borderColor='#378187';
        resetButton.style.boxShadow='0px 5px 2px #214D51';
    }
}
//css styles for contrastTheme
function contrastTheme(){
    document.documentElement.className='contrastTheme';
    document.body.style.backgroundColor='#17062A';
    themeSelectArea.style.backgroundColor='#1E0936';
    headerTexts.style.color='#FFE53D';
    theme1.style.backgroundColor='#1E0936';
    theme2.style.backgroundColor='#1E0936';
    theme3.style.backgroundColor='#00DED0';
    textInput.style.backgroundColor='#1E0936';
    textInput.style.color='#FFE53D';
    textInput.style.borderColor='#1E0936';
    keypadArea.style.backgroundColor='#1E0936';
    //for loop to style each button using className
    for (var i =0; i < buttons.length; i++){
        buttons[i].style.backgroundColor='#331C4D';
        buttons[i].style.color='#FFE53D';
        buttons[i].style.borderColor='#331C4D';
        buttons[i].style.boxShadow='0px 5px 2px #4B1C4D';
        delElement.style.backgroundColor='#56077C';
        delElement.style.color='#FFF';
        delElement.style.borderColor='#56077C';
        delElement.style.boxShadow='0px 5px 2px #880BC4'
        solve.style.backgroundColor='#00DED0';
        solve.style.color='#1A2327';
        solve.style.borderColor='#00DED0';
        solve.style.boxShadow='0px 5px 2px #2CFFF2';
        resetButton.style.backgroundColor='#56077C';
        resetButton.style.color='#FFF';
        resetButton.style.borderColor='#56077C';
        resetButton.style.boxShadow='0px 5px 2px #880BC4'
    }
}
//Selects theme based on system theme
if(useDark.matches){
    darkTheme();
}else{
    lightTheme();
}
//Manual theme selection
theme1.onclick=(function() {darkTheme()});
theme2.onclick=(function() {lightTheme()});
theme3.onclick=(function() {contrastTheme()});
