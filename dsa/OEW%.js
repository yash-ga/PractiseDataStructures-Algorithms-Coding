function isEven(n){
    let isEven=true;
    for(let i=1;i<=n;i++){
        isEven=!isEven
    }
    return isEven
}
let n=7;
if(isEven(n)){
    console.log('even');
}
else{
    console.log('odd');
}

