function runProgram(input) {
    // var ni=input.split("\n")
    // console.log(ni);
    var n=Number(input)
    // console.log(n);
    console.log(fibonacci(n));
    }
    function fibonacci(n){
        var seq=[0,1,1,2,3,5]
        for(var i=2;i<=n;i++){
            seq.push(seq[i-1]+seq[i-2])
        }
        return seq[seq.length-1]
        
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
   