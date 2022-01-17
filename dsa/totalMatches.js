function runProgram(input) {
    var ni=input.split("\n")
    // console.log(ni);
    for(var k=1;k<ni.length;k++){
        var n=Number(ni[k])
        console.log(n-1);
       
    }
    
     
   }
   if (process.env.USERNAME === "My") {
     runProgram(`2
     2
     3`);
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
   