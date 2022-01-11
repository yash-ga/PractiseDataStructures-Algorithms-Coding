function runProgram(input) {
    // console.log(process.env.USERNAME);
    // var ni=input.split("\n")
    // console.log(ni);
    var data=input.trim().split(" ").map(Number)
    console.log(data);
    var maxpro=0
    var min=maxpro
    for(var i=0;i<data.length;i++){
        if(data[i]>min){
          // console.log(data[i]);
          min=data[i]
            maxpro=data[i]-min
            // console.log(maxpro);
        }
      }
      console.log(maxpro);
    
  }
  if (process.env.USERNAME === "My") {
    runProgram(`7 1 5 3 6 4`);
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
  