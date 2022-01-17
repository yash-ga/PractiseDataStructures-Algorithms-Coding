function runProgram(input) {
    var ni=input.split("\n")
    console.log(ni);
    for(var k=1;k<ni.length;k++){
        var data=ni[k].trim().split(" ")
        console.log(data);
        data.sort(function(a,b){return b-a})
        console.log(data.sort());
        if(data<0){
            // console.log('yes');
            data.sort(function(a,b){return b-a})
            console.log(data);
        }
    }
    
     
   }
   if (process.env.USERNAME === "My") {
     runProgram(`2
     53334121
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
