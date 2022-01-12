function runProgram(input) {
    // console.log(process.env.USERNAME);
    var ni=input.split("\n")
    // console.log(ni);
    for(var k=2;k<ni.length;k=k+2){
        var data=ni[k].trim().split(" ").map(Number)
        var nums=ni[k-1].trim().split(" ").map(Number)
        var q=Number(nums[1])
        console.log(q);
        // console.log(data);
        var count=0;
        for(var i=0;i<data.length;i++){
            for(var j=0;j<data.length;j++){
                if(i!=j&&Math.abs(data[i]-data[j]==q)){
                    
                    count=1;
                }
                
            }
        }
        if(count==1){
            console.log('Yes');
        }
        else{
            console.log('No');
        }
    }
    
  }
  if (process.env.USERNAME === "My") {
    runProgram(`2
    5 3
    1 2 3 4 5
    5 8
    1 2 3 4 5 `);
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
  