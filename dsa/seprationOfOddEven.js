function runProgram(input) {
    // console.log(process.env.USERNAME);
    var ni=input.split("\n")
    // console.log(ni);
    for (var i = 2; i < ni.length; i = i + 3) {
        var data = ni[i].trim().split(" ").map(Number);
        var k=Number(ni[i+1])
        // console.log(k);
        // console.log(data);
        segregate(data,k)
    }
  }
  function segregate(data,k){
      var even=[]
      var odd=[]
      for(var i=0;i<data.length;i++){
          if(data[i]%2==0){
            even.push(data[i])
          }
          else if(data[i]%2==1){
              odd.push(data[i])
          }
      }
      (even.sort());
      (odd.sort());
      var ans=[]
      if(k==1){
          ans.push(...even,...odd)
        // ans=ans+" "+even+" "+odd+" "
        }
        else if(k==2){

            ans.push(...odd,...even)
            // ans+=odd+" "+even
        }
        console.log(ans.join(" "));
  }
  if (process.env.USERNAME === "My") {
    runProgram(`2
    6
    1 3 5 8 7 2 
    1
    6 
    1 3 5 2 7 4
    2`);
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
  