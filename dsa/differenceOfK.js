function runProgram(input) {
    var ni=input.split("\n")
    // console.log(ni);
    for(let i=2;i<ni.length;i=i+2){
        let num=ni[i-1].trim().split(" ").map(Number)
        // console.log(num);
        let k=Number(num[1])
        // console.log(k);
        let data=ni[i].trim().split(" ").map(Number)
        // console.log(data);
        console.log(diff(data,k));
    }
}
function diff(data,k){
    let ans='No'
    for(let i=0;i<data.length;i++){
        for(let j=0;j<data.length;j++){
            if(i!=j&&(Math.abs(data[i]-data[j])==k)){
                // console.log('Yes');
                ans='Yes'
            }
        }
    }
    return ans
}
    
    
     
   if (process.env.USERNAME === "My") {
     runProgram(`2
     5 3
     1 2 3 4 5
     5 8
     1 2 3 4 5 `);
   } else {
     process.stdin.resume();
     process.stdin.setEncoding("ascii");
     let read = "";
     process.stdin.on("data", function (input) {
       read += input;
     });
     process.stdin.on("end", function () {
       read = read.replace(/\n$/, "");
       read = read.replace(/\n$/, "");
       runProgram(read);
     });
     process.on("SIGINT", function () {
       read = read.replace(/\n$/, "");
       runProgram(read);
       process.exit(0);
     });
   }
   