function runProgram(input) {
    // console.log(process.env.USERNAME);
    var ni=input.split("\n")
    // console.log(ni);
    for(var k=1;k<ni.length;k++){
        var data=ni[k].trim().split(" ").map(Number)
        // console.log(data);
        var count=0;
        // for(var i=0;i<data.length;i++){
            //7 1 8
            if(data[0]+data[1]>=data[2]&&data[0]+data[2]>=data[1]&&data[2]+data[1]>=data[0]){
                count=1
            }
        // }
    
    if(count==1){
        console.log('Yes');
    }
    else{
        console.log('No');
    }
  }
}
  if (process.env.USERNAME === "My") {
    runProgram(`4
    4 5 13
    7 1 8
    2 5 4
    2 2 2`);
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
  