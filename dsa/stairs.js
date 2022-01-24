function runProgram(input) {
    // var ni=input.split("\n")
    // console.log(ni);
    let data=Number(input)
    
    console.log(stairs(data));
    
    
     
   }
   function stairs(data){
       if(data<0){
           return 0
       }
       if(data==0||data==1){
           return 1
       }
       return stairs(data-1)+stairs(data-2)+stairs(data-3)
   }
   if (process.env.USERNAME === "My") {
     runProgram(`4`);
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
   