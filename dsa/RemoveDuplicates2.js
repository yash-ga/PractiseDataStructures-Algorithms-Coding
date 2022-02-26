let data='xxyzz'
let count=1;
let res=''
for(let i=1;i<data.length;i++){
    // let temp=data[i-1]
    if(data[i]==data[i+1]){
        count++
        // res=res+temp+count;
        // count=1;
    }
    else{
        res=res+data[i]+count;
        count=1
    }
}
console.log(res);