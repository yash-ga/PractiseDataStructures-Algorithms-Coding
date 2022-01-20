function runProgram(input) {
    // var ni=input.split("\n")
    // console.log(ni);
    var n=Number(input)
    // console.log(n);
    console.log(fibonacci(n));
    }
    function fibonacci(n){
        if(n==0){
            return 0
        }
        if(n==1||n==2){
            return 1
        }

        return fibonacci(n-1)+fibonacci(n-2)
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
   