let screen =document.getElementById("screen")
var buttons=document.querySelectorAll("button")
let screenText=""


for(items of buttons){
    items.addEventListener('click',(e)=>{
       var buttonText=e.target.innerText
       console.log("button text is",buttonText);
       if(buttonText=='X'){
           buttonText='*';
           screenText=screenText+buttonText
           screen.value=screenText
        }
        else if(buttonText=='='){
            screen.value=eval(screenText)
            console.log(screen.value);
        }
        else if(buttonText=='C'){
            screenText=''
            screen.value=screenText
        }
        else{
            screenText=screenText+buttonText
            screen.value=screenText
        }
    })
}