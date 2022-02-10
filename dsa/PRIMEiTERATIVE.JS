function fun(n){
    let str=[0,1]
    for(let i=0;i<n;i++){
        str.push(str[i]+str[i-1])
    }
    return (str[n]);
}
console.log(fun(1));