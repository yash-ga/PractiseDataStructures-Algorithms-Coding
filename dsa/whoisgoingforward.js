function runProgram(input) {
    // console.log(process.env.USERNAME);
    var ni=input.split("\n")
    // console.log(ni);
    var nums=ni[0].trim().split(" ").map(Number)
    var k=Number(nums[1])
    // console.log(k);
    var data=ni[1].trim().split(" ").map(Number)
    // console.log(data);
    for(var i=k+1;i<data.length;i++){
        // console.log(data[i]);
        // console.log(data[k]);
        if(data[i]>=data[k]){
            console.log(i);
            break;
        }
    }
    
  }
  if (process.env.USERNAME === "My") {
    runProgram(`8 4
    10 9 8 7 7 7 5 5`);
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
  