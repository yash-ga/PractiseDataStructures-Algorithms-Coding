function runProgram(input) {
    let n=Number(input)
    console.log(now(n));
}
function now(n){
    if(n<0)return 0
        
    if(n==0)return 1
    
    return now(n-5)+now(n-3)+now(n-1)
}

    
    
     
   if (process.env.USERNAME === "My") {
     runProgram(`10`);
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
   