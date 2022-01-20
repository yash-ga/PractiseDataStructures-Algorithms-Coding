function runProgram(input) {
    var ni=input.split("\n")
    // console.log(ni);
    for(var k=2;k<ni.length;k=k+2){
        var data=ni[k].trim().split(" ").map(Number)
        // console.log(data);
        console.log(nge(data));
    }
}
function nge(data){
var arr=[]
var out=[]
for(var i=data.length-1;i>=0;i--){
    while(arr.length!=0&&arr[arr.length-1]<=data[i]){
        arr.pop()
    }
    if(arr.length==0){
        out.push(-1)
    }
    else{
        out.push(arr[arr.length-1])
    }
    arr.push(data[i])
}
return out.reverse().join(" ")

}
    
    
     
   if (process.env.USERNAME === "My") {
     runProgram(`1
     4
     1 3 2 4`);
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
   