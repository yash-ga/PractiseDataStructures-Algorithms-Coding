function runProgram(input) {
    var ni=input.split("\n")
    // console.log(ni);
    var data=ni[1].trim().split(" ").map(Number)
    console.log(min(data));
  }
  function min(data){
    var ans=-1
    var low=0;
    var high=data.length-1
    if(data[low]<=data[high]){
      return ans=1
    }
    while(low<high){
      var mid=Math.floor(low+(high-low)/2)
      if(data[mid]>data[mid+1]){
        return ans=data[mid+1]
      }
      else if(data[mid]<data[mid-1]){
        return ans=data[mid]
      }
      else if(data[low]<=data[mid]){
        low=mid+1
      }
      else{
        high=mid-1
      }
    }
    return ans
  }
    
    
     
   if (process.env.USERNAME === "My") {
     runProgram(`10
    9 8 7 6 5 0 1 2 3 4`);
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
   