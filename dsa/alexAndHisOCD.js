function runProgram(input) {
    var ni=input.split("\n")
    // console.log(ni);
    for(var k=2;k<ni.length;k=k+2){
        var data=ni[k].trim().split(" ").map(Number)
        // console.log(data);
        var count=0;
        duration(data,count)
    }
    function duration(data,count){
        // var sum=0;
        for(var i=0;i<data.length-1;i++){
            // if((data[i]+data[i+1])%60==0)count++;
            if((data[i]+data[i+1])%60==0){
                count++
            }
        }
            if(data[data.length-1]%60==0){
                count++
            }
        console.log(count);
    }
    
    
     
   }
   if (process.env.USERNAME === "My") {
     runProgram(`2
     3
     60 60 60
     5
     30 30 10 20 400`);
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
   