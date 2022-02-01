function runProgram(input) {
   let n=Number(input)
//    console.log(n);
   console.log(dwts(n));
    
    
     
   }
   function dwts(n){
       if(n<0){
           return 0
       }
       if(n==1||n==0){
           return 1
       }
       else {
           return dwts(n-1)+dwts(n-3)+dwts(n-4)
       }
   }
   if (process.env.USERNAME === "My") {
     runProgram(`5`);
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
   