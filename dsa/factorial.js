function runProgram(input) {
    
    let n=Number(input)
    console.log(factorial(n));
}
//5*4*3*2*1=120
function factorial(n){
    // if(n==0||n==1)return 1;
    // return n*factorial(n-1)
    let prod=1;
    for(let i=1;i<=n;i++){
        prod=prod*i
    }
    return prod
}

    
    
     
   if (process.env.USERNAME === "My") {
     runProgram(`5`);
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
   