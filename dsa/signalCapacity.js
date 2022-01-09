// function runProgram(input) {
//     // console.log(process.env.USERNAME);
//     var ni=input.split("\n")
//     // console.log(ni);
//     for(var k=2;k<ni.length;k=k+2){

//         var data=ni[k].trim().split(" ").map(Number)
//         // console.log(data);100 80 60 70 60 75 85
//     // var arr=[0,1,]
//     // var out=[1,1,1,2,1]
//     var arr=[],out=[]
//     for(var i=0;i<data.length;i++){
//         while(arr.length!=0&&data[arr[arr.length-1]]<=data[i]){
//             arr.pop()
//         }
//         if(arr.length==0){
//             out.push(i+1)
//         }
//         else{
//             out.push(i-arr[arr.length-1])
//         }
//         arr.push(i)
//     }
//     console.log(out.join(" "));
    
// }
// }
// if (process.env.USERNAME === "My") {
//     runProgram(`1
//     7
//     100 80 60 70 60 75 85`);
//   } else {
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     let read = "";
//     process.stdin.on("data", function (input) {
//       read += input;
//     });
//     process.stdin.on("end", function () {
//       read = read.replace(/\n$/, "");
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//     });
//     process.on("SIGINT", function () {
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//       process.exit(0);
//     });
//   }
let a='yash'
function b(){
  let   a='garg'
    console.log(a);
}
b()
console.log(a);