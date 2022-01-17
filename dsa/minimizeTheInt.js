function runProgram(input) {
    var ni=input.split("\n")
    // console.log(ni);
    for(var k=1;k<ni.length;k++){
        var data=ni[k].trim().split("")
        // console.log(data);
        if(data[0]=='-'){
            data.sort(function(a,b){return b-a})
            console.log(data.join(""));
        }
        else{
            data.sort(function(a,b){return a-b})
            // console.log(data);
            if(data[0]<=0){
                // console.log(data);
                for(let i=1;i<data.length;i++){
                    if(data[i]>0){
                        // console.log(data[i]);
                    var temp=data[0]
                        data[0]=data[i]
                        data[i]=temp
                        break;
                    }
                }
            }
            console.log(data.join(""));
        }
       
    }
    
     
   }
   if (process.env.USERNAME === "My") {
     runProgram(`2
     53004121
     -1002911`);
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
   var a=["-",6,4,1,2,9];
