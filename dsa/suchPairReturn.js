function runProgram(input) {
    // console.log(process.env.USERNAME);
    var ni=input.split("\n")
    console.log(ni);
    for(var k=1;k<ni.length;k=k+2){
        var nums=ni[k].trim().split(" ").map(Number)
        var p=Number(nums[1])
        console.log(p);
        var data=ni[k+1].trim().split(" ").map(Number)
        console.log(data);
        for(var i=0;i<data.length;i++){
            for(var j=i;j<p;j++){
                
            }
        }
    }
    
  }
  if (process.env.USERNAME === "My") {
    runProgram(`1
    5 2
    3 4 0 2 7`);
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
  