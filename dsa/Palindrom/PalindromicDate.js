let date="22022022"//please type your date
let palindrom=""
for(let i=date.length-1;i>=0;i--){
    palindrom=palindrom+date[i]
}
// console.log(palindrom);
//check your output
if(palindrom==date){
    console.log('yay! today is a palindromic date');
}
else{
    console.log('oops! its a normal date');
}

