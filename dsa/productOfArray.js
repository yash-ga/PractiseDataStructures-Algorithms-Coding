function runProgram(input) {
  
  var ni = input.split("\n");
  
  for (var k = 2; k < ni.length; k = k + 2) {
    var arr = ni[k].trim().split(" ").map(Number);
   
    var product = [];
    product.length = arr.length;
    
    var temp = 1;
    for (var i = 0; i < arr.length; i++) {
      product[i] = temp;
      temp = temp * arr[i];
    }
    temp = 1;
    for (var i = arr.length - 1; i >= 0; i--) {
      product[i] = product[i] * temp;
      temp = temp * arr[i];
    }
    console.log(product);
  }
}
if (process.env.USERNAME === "My") {
  runProgram(`2
    5
    1 2 3 4 5
    3
    3 2 7`);
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
