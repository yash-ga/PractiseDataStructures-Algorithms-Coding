function runProgram(input) {
    var ni=input.split("\n")
    console.log(ni);
    let s1=ni[0].trim().split(" ")
    let s2=ni[1].trim().split(" ")
    console.log(s1,s2);
    let a1=new Set(s1)
    let a2=new Set(s2)
    console.log(a1,a2);    
    
     
   }
   if (process.env.USERNAME === "My") {
     runProgram(`amitttttt
     mtia`);
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
   