function runProgram(input) {
    var ni=input.split("\n")
    // console.log(ni);
    for(let i=1;i<ni.length;i++){
        let data=ni[i].trim().split("")
        // console.log(data);
        console.log(bracket(data));
        
    }
    
    
     
   }
   function bracket(data){
       let low=0;
       let high=data.length-1
       let ans="balanced"
       if(data.length%2==1){
           return "not balanced"
       }
       while(low<=high){
           if(data[low]=='('&&data[high]==')'||data[low]=='{'&&data[high]=='}'||data[low]=='['&&data[high]==']'){
               low++;
               high--;
           }else{
               ans="not balanced"
           }
           return ans
        }

   }
   if (process.env.USERNAME === "My") {
     runProgram(`3
     {([])}
     ()
     ([]`);
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
   