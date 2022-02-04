function runProgram(input) {
    var ni=input.split("\n")
    // console.log(ni);
    let data=[];
    for(let i=1;i<ni.length;i++){
        data.push(ni[i].trim().split(" ").map(Number))
    }
   
    let arr=[]
    for(let i=0;i<data.length;i++){
        for(let j=0;j<data[i].length;j++){
          arr.push(data[i][j])
    }
        }
        console.log(arr);
        let count=0;
        for(let i=0;i<arr.length;i++){
            if(prime(arr[i])){
                count++
            }
        }
        console.log(count);
       
    }
    
     
   
   if (process.env.USERNAME === "My") {
     runProgram(`3 3
     1 2 3 
     4 5 6
     7 8 9`);
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
function prime(n){
    // 1 2 3 4 5 6 7 8 9

    // let n=8;
    let count=0;
    let a1=[];
    for(let i=2;i<n;i++){
        if(n%i==0){
        count++
        a1.push(n)
    }
}
console.log(a1);
if(count>1){
    console.log('not prime');
}
else{
    console.log('prime');
}
}