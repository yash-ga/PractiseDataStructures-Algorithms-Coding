function runProgram(input) {
    var ni=input.split("\n")
    
    let data=ni[1].trim().split(" ").map(Number)
    
  
    for(let k=3;k<ni.length;k++){
        let queries=ni[k].trim().split(" ").map(Number)
        
        let q1=Number(queries[0])
        let q2=Number(queries[1])
        console.log(find(data,q1,q2));
    }
    function find(data,q1,q2){
       
        let count=0;
        for(let i=0;i<data.length;i++){
          
            if(data[i]>=q1&&data[i]<=q2){
                count++
            }
            
        }
        return (count);
        
    }  
    
     
   }
   if (process.env.USERNAME === "My") {
     runProgram(`5
     10 1 10 3 4
     4
     1 10
     2 9
     3 4
     2 2`);
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
   