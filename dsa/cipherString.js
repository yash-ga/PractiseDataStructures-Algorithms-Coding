function runProgram(input) {
    var ni=input.split("\n")
    // console.log(ni);
    for(let k=2;k<ni.length;k=k+2){
        let data=ni[k].trim().split("")
        // console.log(data);
        let temp=""
        let count=1;
        for(let i=0;i<data.length;i++){//
            if(data[i]==data[i+1]){//
                count++;//1
            }
            else{
                temp=temp+data[i]+count//
                count=1;//1

            }
        }
        console.log(temp);
    }
    
    
     
   }
   if (process.env.USERNAME === "My") {
     runProgram(`2
     5
     aabcc 
     5
     aazaa`);
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
   