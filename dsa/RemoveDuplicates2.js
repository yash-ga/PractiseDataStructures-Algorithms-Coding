let data='aabbcd'

let data1=(data.split("").sort());
let res=''
for(let i=0;i<data1.length;i++){
    if(data1[i]==data1[i+1]){
        continue;
    }
    else{
        res=res+data1[i]
    }
}
console.log(res);