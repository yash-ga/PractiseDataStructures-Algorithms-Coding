function runProgram(input) {
    // console.log(process.env.USERNAME);
    var ni=input.split("\n")
    // console.log(ni);
    var data=ni[1].trim().split(" ").map(Number)
    // console.log(data);
    var k=Number(ni[2])
    
    // console.log(k);
    console.log(upperbound(data,k))
    console.log(lowerbound(data,k))

  }
  function upperbound(data,k){
      var low=0;high=data.length-1;ans=-1
      while(low<=high){
        var middle=Math.floor(low+(high-low)/2)
        // console.log(middle);
          if(data[middle]>k){
            ans=middle
            high=middle-1
          }
          else{
              low=middle+1
          }
        }
        return ans

  }
  function lowerbound(data,k){
    var low=0;high=data.length-1;ans=-1
    while(low<=high){
      var middle=Math.floor(low+(high-low)/2)
      // console.log(middle);
        if(data[middle]<=k){
          ans=middle
          low=middle+1
        }
        else{
          high=middle-1
        }
      }
      return ans

}
  if (process.env.USERNAME === "My") {
    runProgram(`6
    1 1 1 2 2 2	
    1`);
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
  