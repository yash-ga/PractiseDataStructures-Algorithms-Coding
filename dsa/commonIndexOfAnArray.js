function runProgram(input) {
    var ni=input.split("\n")
    console.log(ni);
    for(var k=2;k<ni.length;k=k+4){
        var n=ni[k].trim().split(" ").map(Number)
        console.log(n);
        var m=ni[k+2].trim().split(" ").map(Number)
        console.log(m);
        var a=[...n,...m]
        console.log(a);
        for(var i=0;i<n;i++){
            // for(var )s

        }
    }
    
     
   }
   if (process.env.USERNAME === "My") {
     runProgram(`2
     6
     1 2 3 4 5 6
     3
     3 3 5
     4 
     1 2 3 4
     4 
     5 6 7 8`);
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
   