function runProgram(input) {
   var ni=input.split("\n")
//    console.log(ni);
   var nums=ni[0].trim().split(' ').map(Number)
   var k=Number(nums[1])
//    console.log(k);
   var arr=ni[1].trim().split(' ').map(Number)
//    console.log(arr);
   var n=arr.length
//    console.log(n);
   var maxsum=0;
var windowSum=0;
for(var i=0;i<k;i++){
    maxsum=maxsum+arr[i]
    windowSum=maxsum
}
// console.log(maxsum);
for(var i=k;i<n;i++){
    windowSum=windowSum-arr[i-k]+arr[i]
    maxsum=Math.max(maxsum,windowSum)
}
console.log(maxsum);


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
// 10 3

// var arr=[-1 ,-1 ,-2 ,1 ,-2 ,4 ,1 ,9 ,3 ,9]
// var k=3;
// var n=arr.length

// console.log(x);
// console.log(windowSum);