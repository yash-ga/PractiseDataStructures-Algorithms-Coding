function runProgram(input) {
   var ni=input.split("\n")
   console.log(ni);
   for(var k=2;k<ni.length;k=k+2){
       var data=ni[k].trim().split(" ").map(Number)
       console.log(data);
       
   }

    
}
if (process.env.USERNAME === "My") {
  runProgram(`1
  4
  1 3 2 4`);
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
