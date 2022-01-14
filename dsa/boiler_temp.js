function runProgram(input) {
   var ni=input.split("\n")
  //  console.log(ni);
   var data=ni[1].trim().split(" ").map(Number)
  //  console.log(data);
   var min=data[0]
   for(var i=0;i<data.length;i++){
     if(data[i]<min){
       min=data[i]
     }
   }
console.log(min);
    
  }
  if (process.env.USERNAME === "My") {
    runProgram(`10
    4 6 7 9 10 -1 0 1 2 3`);
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
  