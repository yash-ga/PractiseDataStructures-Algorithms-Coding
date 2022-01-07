function runProgram(input) {
    // console.log(process.env.USERNAME);
    var ni=input.split("\n")
    // console.log(ni);
    var data=ni[1].trim().split(" ").map(Number)
    console.log(equilibrium(data));
}
    // console.log(data);
    function equilibrium(data){
    for(var i=0;i<data.length;i++){
        var leftsum=0;
        for(var j=0;j<i;j++){
            leftsum=leftsum+data[j]
        }
        // console.log(leftsum);
        var rightsum=0;
        for(var j=i+1;j<data.length;j++){
            rightsum=rightsum+data[j]
        }
        // console.log(rightsum);
        if(leftsum==rightsum&&i!=0&&i!=data.length){
            return(i+1);
        }
    }
    
        return(-1);
        
    
    
  }
  if (process.env.USERNAME === "My") {
    runProgram(`5
    3 3 5 5 1`);
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
  