function runProgram(input) {
  
    var n=Number(input)
    console.log(staircase(n));

    
  }
  function staircase(n){
      if(n<0){
          return 0
      }
      if(n==0||n==1){
          return 1
      }
      return staircase(n-1)+staircase(n-2)+staircase(n-3)
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
  