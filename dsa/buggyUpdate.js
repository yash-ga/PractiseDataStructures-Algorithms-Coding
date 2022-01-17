function runProgram(input) {
    var ni=input.split("\n")
    // console.log(ni);
    for(var k=1;k<ni.length;k=k+2){
        var c=ni[k]
        // console.log(c);
        console.log(c[0]);
        var n=ni[k+1]
        console.log(n);
       if(c[0]>n[0]){
           console.log('False');
       }
       else if(c[0]==n[0]){
           continue;
       }
    //    if(c[])
    }
    
     
   }
   if (process.env.USERNAME === "My") {
     runProgram(`3
     7.55.94
     36.30.0`);
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
   