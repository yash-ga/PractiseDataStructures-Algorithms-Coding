function runProgram(input) {
    var ni=input.split("\n")
    // console.log(ni);
    let s1=ni[0].trim().split("")
    let s2=ni[1].trim().split("")
    // console.log(s1,s2);
    if(s1.length!=s2.length)console.log('No');
    s1.sort()
    s2.sort()
    // console.log(s1,s2);
    let ans='Yes'

    for(let i=0;i<s1.length;i++){
        if((s1[i])!=(s2[i])){
            ans='No'
        }
    }
    console.log(ans);
   
    
    
     
   }
   if (process.env.USERNAME === "My") {
     runProgram(`amit
     mtia`);
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
   