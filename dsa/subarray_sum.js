function runProgram(input) {
   var ni=input.split("\n")
   console.log(ni);
   var nums=ni[0].trim().split(' ').map(Number)
   var k=Number(nums[1])
   console.log(k);
   var data=ni[1].trim().split(' ').map(Number)
   console.log(data);
   var n=data.length
//    console.log(sum(data,n,k));
// }
// function sum(data,n,k){
    if(k>n){
        console.log('invalid');
    }
    var maxSum=0;
    var windowSum;
    for(var i=0;i<k;i++){
        maxSum=maxSum+data[i]
         windowSum=maxSum;
    }
    console.log(windowSum);
    for(var i=k;k<n;i++){
        windowSum=windowSum-data[i-k]+data[i]
    }
    maxSum=Math.max(maxSum,windowSum)
    // return maxSum
    console.log(maxSum);
}
if (process.env.USERNAME === "My") {
  runProgram(`10 3
  -1 -1 -2 1 -2 4 1 9 3 9`);
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
