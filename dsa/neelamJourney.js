function runProgram(input) {
    var ni=input.split("\n")
    // console.log(ni);
    let data=ni[1].trim().split(" ").map(Number)
    // console.log(data);
    let min=data[0]
    let sum=0;
    for(let i=0;i<data.length;i++){
        if(data[i]>min){
            sum=sum+min
        }
        // console.log(sum);
         if(data[i]<=min){
            sum=sum+data[i]
            min=data[i]
        }
    }
    console.log(sum);
    
    
     
   }
   if (process.env.USERNAME === "My") {
     runProgram(`5
     4 7 8 3 4`);
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
   