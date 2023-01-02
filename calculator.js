let textInput = document.getElementById("textval");
let solve= document.getElementById('calculate');
let delElement= document.getElementById('delete');

function display(val){
    textInput.value+=val;
}
delElement.onclick = function(){
    textInput.value=textInput.value.slice(0,-1);
}
solve.onclick =function(){
    if(typeof eval(textInput.value) == "undefined"){
        clr();
    }else{
        textInput.value= eval(textInput.value);
    } 
    
}
function clr(){
    textInput.value= "";
}