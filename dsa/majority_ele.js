function majority(data) {
  var obj = {};
  for (var i = 0; i < data.length; i++) {
    if ((obj[data[i]] = obj[data[i]])) {
      obj[data[i]] = obj[data[i]] + 1;
    } else {
      obj[data[i]] = 1;
    }
  } //o(n)
  var ans = [];
  for (key in obj) {
    if (obj[key] > data.length / 2) {
      ans.push(key);
    }
  } //o(n)
  if (ans.length == 0) {
    ans.push(-1);
  }

  console.log(ans.join(" "));
}
function runProgram(input) {
  var ni = input.split("\n");

  for (var i = 2; i < ni.length; i = i + 2) {
    var data = ni[i].trim().split(" ").map(Number);

    majority(data);
  } //o(n)
}

if (process.env.USERNAME === "My") {
  runProgram(`2
    6
    1 1 1 1 2 3
    5
    1 1 2 2 3
    4
    3 3 3 1`);
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
