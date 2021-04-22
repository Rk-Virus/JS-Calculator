
document.onkeydown = function(e){
    console.log("keycode : ", e.keyCode);
    if(e.keyCode == 13){
        console.log("Enter clicked"); 
        evaluate();
    }
}


var myScreen = document.getElementById('screen');
var buttons = document.getElementsByTagName('button');

for(let button of buttons){
    button.addEventListener('click',(e)=>{
        let buttonText = e.target.innerText;
        console.log(buttonText);
        if(buttonText == 'x'){
            buttonText = '*';
            myScreen.value += buttonText;
        }
        else if(buttonText == 'C'){
            myScreen.value = "";
        }
        else if(buttonText == '='){
            evaluate();
        }
        else{
        myScreen.value += buttonText;
        }
    })
}

function evaluate(){
    myScreen.value = eval(myScreen.value);
}