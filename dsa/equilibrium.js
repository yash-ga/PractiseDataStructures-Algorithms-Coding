function runProgram(input) {
  // console.log(process.env.USERNAME);
  var ni = input.split("\n");
  // console.log(ni);
  var arr = ni[1].trim().split(" ").map(Number);
  var N = arr.length;
  console.log(equilibrium(N, arr));
}
// console.log(data);
function equilibrium(N, arr) {
    //3 3 5 5 1
  for (var i = 0; i < N; i++) {
    var leftsum = 0;
    for (var j = 0; j < i; j++) {
      leftsum = leftsum + arr[j];
      //3 
    }
    // console.log(leftsum);
    var rightsum = 0;
    for (var j = i + 1; j < N; j++) {
      rightsum = rightsum + arr[j];
      //3
    }
    // console.log(rightsum);
    if (leftsum == rightsum && i != 0 && i != N) {
      return i + 1;
    }
  }

  return -1;
}
if (process.env.USERNAME === "My") {
  runProgram(`5
    3 3 5 5 1`);
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
