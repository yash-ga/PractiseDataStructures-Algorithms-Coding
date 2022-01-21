function runProgram(input) {
    var ni=input.split("\n")
    // console.log(ni);
    
    for(var i=1;i<ni.length;i++){
        var n=Number(ni[i])
        console.log(Goperator(n));
    }
     
   }
   function Goperator(n){
       return(Math.floor(n/2));
   }
   if (process.env.USERNAME === "My") {
     runProgram(`3
     2
     11
     12`);
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
   