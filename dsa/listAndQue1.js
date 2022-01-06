function runProgram(input) {
    // console.log(process.env.USERNAME);
    var ni=input.split("\n")
    // console.log(ni);
    var a=[]
    var c=[]
    for(var k=1;k<ni.length;k++){
      var data=ni[k].trim().split(" ")
      // console.log(data);
      if(data[0]=='E'){
        a.push(data[1])
      }
      else if(data[0]=='D'){
        var b=a.shift()
        c.push(b)
      }
      console.log(c);
      
    }
    console.log(a);
    
    
  }
  if (process.env.USERNAME === "My") {
    runProgram(`4
    E 2
    E 3
    D
    D`);
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
  