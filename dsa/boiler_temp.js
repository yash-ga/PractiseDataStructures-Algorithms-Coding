function runProgram(input) {
   var ni=input.split("\n")
   console.log(ni);
   let data=[]
   let arr=[[]]
   for(let k=1;k<ni.length;k++){
      data.push(ni[k].trim().split(" ").map(Number))
      
    }
    console.log(data);
    for(let i=0;i<data.length;i++){
      for(let j=0;j<data[i].length;j++){
        if(data[i][j]==0){
          arr[i][j]==1
        }
        else{
          arr[i][j]==0
        }
      }
    }
    console.log(arr);
   
   
    
  }
  if (process.env.USERNAME === "My") {
    runProgram(`3 2
    1 0
    0 1
    1 1`);
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
  