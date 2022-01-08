function runProgram(input) {
    // console.log(process.env.USERNAME);
    var ni=input.split("\n")
    console.log(ni);
    for(var k=2;k<ni.length;k=k+2){
        var data=ni[k].trim().split(" ").map(Number)
        console.log(data);
        var count=0;
        for(var i=0;i<data.length;i++){
            for(var j=0;i<data.length;i++){
                    if(data[i]==2*data[j]){
                        count++
                    }
            }
        }
        console.log(count);
    }
    
  }
  if (process.env.USERNAME === "My") {
    runProgram(`2
    5
    1 1 1 1 1
    6
    1 1 2 2 4 1`);
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
  