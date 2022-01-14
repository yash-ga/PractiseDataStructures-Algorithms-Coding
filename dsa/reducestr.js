function runProgram(input) {
    // console.log(process.env.USERNAME);
    var ni=input.split("\n")
    console.log(ni);
    var data=input.split("")
    // console.log(data);
    var ans=[]
    for(var i=0;i<data.length;i++){
        if(data[i]==data[i+1]){
            i=i+1
        }
        else{
            ans.push(data[i])
        }
    }
    // console.log(ans);
    if(ans.length==0){
        console.log('Empty String');
    }
    else{
        console.log(ans.join(""));
    }
    
  }
  if (process.env.USERNAME === "My") {
    runProgram(`aaaab`);
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
  