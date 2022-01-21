function runProgram(input) {
  var ni = input.split("\n");
  // console.log(ni);
  for (var t = 2; t < ni.length; t = t + 2) {
    var data = ni[t].trim().split(" ").map(Number);
    // console.log(data);
    product(data);
  }
}
  function product(data) {
    var max=1;
    var max2=1;
    for(var i=0;i<data.length;i++){
        if(data[i]>max){
            max=i
        }
    }
    console.log(max);
    for(var j=0;j<data.length;j++){
        if(data[j]>max2&&j!=max){
            max2=j
        }
    }
    console.log(max2);
    console.log(data[max]*data[max2]);
}
if (process.env.USERNAME === "My") {
  runProgram(`3
     6 
     9 7 8 9 `);
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

// var data=[1,2,3,4,5]

