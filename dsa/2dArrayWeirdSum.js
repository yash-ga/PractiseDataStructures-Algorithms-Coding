function runProgram(input) {
    var ni=input.split("\n")
    console.log(ni);
    let n=Number(ni[0])
    console.log(n);
    let data=[]
    for(let i=1;i<ni.length;i++){
        data.push(ni[i].trim().split(" ").map(Number))
    }
    console.log(data);
    let sum=0;
    let half=Math.floor(n/2)
console.log(half);
let s1,s2,s3=0
    for(let i=0;i<half;i++){
        for(let j=0;j<data[i].length;j++){
            s1=s1+data[i][0]
        }
    }
    console.log(s1);
    
    
     
   }
   if (process.env.USERNAME === "My") {
     runProgram(`5
     1 2 3 4 5
     6 7 8 9 10
     11 12 13 14 15
     16 17 18 19 20
     21 22 23 24 25`);
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
   