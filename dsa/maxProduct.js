function runProgram(input) {
    var ni=input.split("\n")
    // console.log(ni);
    for(var t=2;t<ni.length;t=t+2){
        var data=ni[t].trim().split(" ").map(Number)
        // console.log(data);
        product(data)
    }
    function product(data){
        var max=data[0]*data[1]
var prod=1;
var ans=[]
for(var i=0;i<data.length;i++){
    for(var j=0;j<data.length;j++){
        if(i!=j){

            var prod=data[i]*data[j]
            ans.push(prod)
        }
    }
}
// console.log(ans);
for(var k=0;k<ans.length;k++){
    if(ans[k]>max)
    max=ans[k]
}
console.log(max);

    }
    
    
     
   }
   if (process.env.USERNAME === "My") {
     runProgram(`3
     6 
     1 0 7 2 4 0
     5
     1 2 3 4 5
     2
     0 0`);
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
   
// var data=[1,2,3,4,5]
