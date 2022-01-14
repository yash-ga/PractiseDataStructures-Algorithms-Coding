function runProgram(input) {
    var ni=input.split("\n")
   //  console.log(ni);
   var nums=ni[0].trim().split(" ").map(Number)
   var k=Number(nums[1])
    var data=ni[1].trim().split(" ").map(Number)
   //  console.log(data);
    // var min=data[0]
    var ans=-1
    for(var i=0;i<data.length;i++){
      if(data[i]==k){
        // min=data[i]
        ans=i
      }
    }
 console.log(ans);
     
   }
   if (process.env.USERNAME === "My") {
     runProgram(`5 1
     3 4 5 1 2`);
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
   