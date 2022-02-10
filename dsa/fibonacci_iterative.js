// function runProgram(input) {
//     // var ni=input.split("\n")
//     // console.log(ni);
//     var n=Number(input)
//     // console.log(n);
//     console.log(fibonacci(n));
//     }
//     function fibonacci(n){
//         var seq=[0,1]
//         for(var i=2;i<=n;i++){
//             seq.push(seq[i-1]+seq[i-2])
//         }
//         return seq[seq.length-1]
        
//     }
//    if (process.env.USERNAME === "My") {
//      runProgram(`5`);
//    } else {
//      process.stdin.resume();
//      process.stdin.setEncoding("ascii");
//      let read = "";
//      process.stdin.on("data", function (input) {
//        read += input;
//      });
//      process.stdin.on("end", function () {
//        read = read.replace(/\n$/, "");
//        read = read.replace(/\n$/, "");
//        runProgram(read);
//      });
//      process.on("SIGINT", function () {
//        read = read.replace(/\n$/, "");
//        runProgram(read);
//        process.exit(0);
//      });
//    }
   
function fun(n){
  let str=[0,1]
  for(let i=2;i<=n;i++){
    str.push(str[i-1]+str[i-2])
  }
  return str[str.length-1]
}
console.log(fun(2));