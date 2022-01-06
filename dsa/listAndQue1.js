function runProgram(input) {
  var ni = input.split("\n");

  var a = [];
  var c = [];
  for (var k = 1; k < ni.length; k++) {
    var data = ni[k].trim().split(" ");

    if (data[0] == "E") {
      a.push(data[1]);
    } else if (data[0] == "D") {
      if (a.length != 0) {
        var b = a.shift();
        c.push(b);
      } else {
        console.log("Empty");
      }
    }
  }
  console.log(c.join("\n"));
}
if (process.env.USERNAME === "My") {
  runProgram(`4
    D
    D
    D
    D
    E 4
    D`);
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
