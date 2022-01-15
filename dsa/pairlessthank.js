function runProgram(input) {
  var ni = input.split("\n");
  // console.log(ni);
  for (var k = 2; k < ni.length; k = k + 3) {
    var data = ni[k].trim().split(" ").map(Number);
    // console.log(data);
    var q = Number(ni[k + 1]);
    // console.log(q);
   
    console.log( min(data,q));
    console.log(pair(data, q));
  }
}
function min(data,q){
    var m=data[0]
    for(var i=0;i<data.length;i++){
        if(data[i]>min&&data[i]<q){
            m=data[i]
        }
    }
return(m)
}
function pair(data, q) {
  var ans = -1;
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data.length; j++) {
      let s = data[i] + data[j];
      var min = data[0];
      if (min < data[i] && data[i] < q) {
        min = data[i];
      }
      if (s < q) {
        if (s > min) {
          ans = s;
        } else {
          ans = min;
        }
      }
    }
  }
  return ans;
}

if (process.env.USERNAME === "My") {
  runProgram(`3
     6
     1 7 6 4 8 4
     7
     1
     2
     3
     6
     5 3 8 2 1 9
     5`);
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
