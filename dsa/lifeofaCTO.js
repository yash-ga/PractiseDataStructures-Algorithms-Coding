function runProgram(input) {
    // console.log(process.env.USERNAME);
    var ni=input.split("\n")
    // console.log(ni);
    var array=ni[1].trim().split(" ").map(Number)
    var element=1
    // console.log(array);
    // console.log(k);
    var low=0;
    var high=array.length-1
    var ans=-1
    while( low <= high){
        
    
       var middle = Math.floor(low + (high-low)/2);
        // console.log(middle);

        if (array[middle] == element){
            // return middle;
            ans=middle
            // console.log(ans);
            high=middle-1
        }

        else if (array[middle] > element){
            high = middle - 1;
}
        else{
            low = middle + 1;
}
}
    console.log(ans);
    }
    
  
  if (process.env.USERNAME === "My") {
    runProgram(`5
    0 0 0 0 0`);
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
  