function runProgram(input) {
   
var ni=input.split("\n")
// console.log(ni);
for(var k=1;k<ni.length;k=k+2){
    var nums=ni[k].trim().split(" ").map(Number)
    var q=Number(nums[1])
    // console.log(q);
    var data=ni[k+1].trim().split(" ").map(Number)
    // console.log(data);
    var n=data.length
    rotate(data,n,q)
    
}
function rotate(data,n,q){
    var res=""
    for(var i=0;i<data.length;i++){
        if(n>=q){
            q=q%n
        }
        res=res+data[Math.abs(n-q+i)%n]+" "
    }
    console.log(res);
}
    
}
if (process.env.USERNAME === "My") {
  runProgram(`3
  5 6
  3 4 5 6 7`);
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
