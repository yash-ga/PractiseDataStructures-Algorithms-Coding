let n=5;
function fac(n){
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    return fac(n-1)*n
}
console.log(fac(n));