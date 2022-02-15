let data=[1,2,3,4,5]
let k=6;
for(let i=0;i<data.length;i++){
    for(let j=0;j<data.length;j++){
        if(data[i]+data[j]==k&&i!==j){
            console.log(i,j);
        }
    }
}