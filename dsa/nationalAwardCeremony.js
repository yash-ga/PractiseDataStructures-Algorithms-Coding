function runProgram(input) {
    // console.log(process.env.USERNAME);
    var ni=input.split("\n")
    // console.log(ni);
    for(var k=2;k<ni.length;k=k+2){
        var data=ni[k].trim().split(" ").map(Number)
        // console.log(data);
        for(var i=0;i<data.length;i++){
            for(var j=0;j<data.length-i;j++){
                if(data[j]>data[j+1]){
                    var temp=data[j]
                    data[j]=data[j+1]
                    data[j+1]=temp
                }
            }
        }
        console.log(data.join(' '));
    }
    
  }
  if (process.env.USERNAME === "My") {
    runProgram(`3
    1
    2
    3
    2 0 1
    4
    2 0 2 1`);
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
  