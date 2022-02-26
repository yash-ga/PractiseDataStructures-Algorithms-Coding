let data='aabbcdd'
// let temp=""
let obj={}
for(let i=0;i<data.length;i++){
    if(obj[data[i]]=obj[data[i]]){
        obj[data[i]]=obj[data[i]]+1
    }
    else{
        obj[data[i]]=1
    }
}
console.log(obj);
for(key in obj){
    if(obj[key]==1){
        console.log(key);
    }
}