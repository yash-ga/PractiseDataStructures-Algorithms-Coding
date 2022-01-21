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
        r=r%data.length
       var temp=[]
       for(var i=data.length-r;i<data.length;i++){
         temp.push(data[i])
       }
       for(var j=0;j<data.length-r;j++){
         temp.push(data[j])
       }
       console.log(temp.join(" "));

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
  