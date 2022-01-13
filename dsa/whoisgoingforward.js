function runProgram(input) {
  // console.log(process.env.USERNAME);
  var ni=input.split("\n")
  // console.log(ni);
  var nums=ni[0].trim().split(" ").map(Number)
  var k=Number(nums[1])
  console.log(k);
  var data=ni[1].trim().split(" ").map(Number)
  console.log(data[k-1]);
  var count=0;
  for(var i=0;i<data.length;i++){
      
      
      if(data[i]>=data[k-1]&&data[i]!=0){
        count++;
         
      }
    }
    console.log(count);
  
}
if (process.env.USERNAME === "My") {
  runProgram(`17 14
  16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0`);
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
