function runProgram(input) {
    var ni=input.split("\n")
    // console.log(ni);
    for(var k=2;k<ni.length;k=k+2){
        var data=ni[k].trim().split(" ").map(Number)
        // console.log(data);
        except(data)
    }
}
    function except(data){
        var obj={}
        for(var i=0;i<data.length;i++){
            if(obj[data[i]]=obj[data[i]]){
                obj[data[i]]=obj[data[i]]+1
            }
            else{
                obj[data[i]]=1
            }
        }
        for(key in obj){
            // console.log(`${key}-${obj[key]}`);
            if(obj[key]==1){
                console.log(key);
            }
        }
    }
    
     
   if (process.env.USERNAME === "My") {
     runProgram(`2
     1
     5
     5
     1 2 1 3 2`);
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
   