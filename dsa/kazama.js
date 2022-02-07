// function runProgram(input) {
//     var ni=input.split("\n")
//     console.log(ni);
//     for(let k=1;k<ni.length;k=k+2){
//         let data=ni[k].trim().split(" ").map(Number)
//         let target=Number(ni[k+1])
//         console.log(data);
//         console.log(target);
//         console.log(kazama(data,target));
//     }
// }
// function kazama(data,target){
//     let flag=0;
//     for(let i=0;i<data.length;i++){
//         if(data[i]==target){
//             flag=i;
//         }
//         else{

//             data.push(target)
//             data.sort()
//             for(let i=0;i<data.length;i++){
//                 if(data[i]==target){
//                     flag=i;
//                 }
//             }

//         }
//     }
//     return data
   
// }

    
    
     
//    if (process.env.USERNAME === "My") {
//      runProgram(`1
//      1 3 5 6
//      5`);
//    } else {
//      process.stdin.resume();
//      process.stdin.setEncoding("ascii");
//      let read = "";
//      process.stdin.on("data", function (input) {
//        read += input;
//      });
//      process.stdin.on("end", function () {
//        read = read.replace(/\n$/, "");
//        read = read.replace(/\n$/, "");
//        runProgram(read);
//      });
//      process.on("SIGINT", function () {
//        read = read.replace(/\n$/, "");
//        runProgram(read);
//        process.exit(0);
//      });
//    }
   

let data=[2,3,4,5]
let k=1;
function find(data,k){
    let low=0;
    let high=data.length-1;
    let ans=-1

    while(low<=high){
        let mid=Math.floor(low+(high-low)/2)
        if(data[mid]==k){
            ans=mid
    }
     if(data[mid]>k){
        high=mid-1
    }
    else{
        low=mid+1
    }
    
}
// return ans
if(ans!=-1){
    return ans
}
else{
    return data[low]
}
}
let a=find(data,k)
console.log(a);