function runProgram(input) {
    // console.log(process.env.USERNAME);
    var ni=input.split("\n")
    // console.log(ni);
    for(var k=1;k<ni.length;k=k+2){
        var q=ni[k].trim().split(" ").map(Number)
        var r=Number(q[1])
        console.log(r);
        var data=ni[k+1].trim().split(" ").map(Number)
        // console.log(q);
        var res='';
        for(var i=0;i<data.length;i++){
            res=res+(data[Math.abs(data.length-r+i)%data.length])+' ';//0+3+1
        }
        // console.log(data[(i+data.length+r)%data.length]);
        console.log(res);
    }
    
  }
  if (process.env.USERNAME === "My") {
    runProgram(`3
    3 1
    1 2 3
    2 2
    1 2
    2 3
    1 2`);
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
  