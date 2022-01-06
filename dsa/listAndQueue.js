function runProgram(input) {
    // console.log(process.env.USERNAME);
    var ni=input.split("\n")
    // console.log(ni);
    var ans=[]
    for(var k=1;k<ni.length;k++){
       
        var data=ni[k].trim().split(" ")
        
            
            // console.log(data[i]);
            if(data[0]=='Push'){
                ans.push(data[1])
                // console.log(ans);
            }
            
            else if(data[0]=='Pop'){
                ans.shift()
                // console.log(ans);
            }
            
        }
        console.log(ans.join("\n"));
    }
    
  
  if (process.env.USERNAME === "My") {
    runProgram(`3
    Push 4
    Push 5
    Pop`);
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
  