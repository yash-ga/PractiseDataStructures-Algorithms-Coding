let data=[1,2,3,4,5]
let k=6;
let low=0;let high=data.length-1;let r=low+1;
while(low<high){
    if(data[low]+data[r]==k){
        console.log(low,r);
    }
    else if(data[low]+data[r]>k){
        high--;
    }
    else{
        low++;
    }
}
// for(let i=0;i<data.length;i++){
//     for(let j=0;j<data.length;j++){
//         if(data[i]+data[j]==k&&i!==j){
//             console.log(i,j);
//         }
//     }
// }

