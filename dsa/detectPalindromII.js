function runProgram(input) {
    var ni=input.split("\n")
    // console.log(ni);
    for(var k=2;k<ni.length;k=k+2){
        var data=ni[k].trim().split("")
        // console.log(data);
        detectPalin(data)
}
}
        function detectPalin(N,string){
            var obj={}
            for(var i=0;i<N;i++){
                if(obj[string[i]]=obj[string[i]]){
                    obj[string[i]]=obj[string[i]]+1
                }
                else{
                    obj[string[i]]=1
                }
            }
            var count=0;
            for(key in obj){

                // console.log(`${key}-${obj[key]}`);
                if(obj[key]%2==1){
                    count++
                }
            }
            // console.log(count);
                if(count>1){
                    console.log("Not Possible !");
                }
                else{
                    console.log("Possible !");

                }

        }
   if (process.env.USERNAME === "My") {
     runProgram(`1
    6
    aabbcc
    5
    aabcd`);
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
   