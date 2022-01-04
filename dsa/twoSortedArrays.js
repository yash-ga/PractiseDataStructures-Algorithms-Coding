// function runProgram(input) {
//   // console.log(process.env.USERNAME);
//   var ni = input.split("\n");
//   console.log(ni);
//   for (var k = 2; k < ni.length; k++) {
//     var data = ni[k].trim().split(" ").map(Number);
//     console.log(two(data));
//   }
//     function two(data){
//     var obj = {};
//     for (var i = 0; i < data.length; i++) {
//       if ((obj[data[i]] = obj[data[i]])) {
//         obj[data[i]] = obj[data[i]] + 1;
//       } else {
//         obj[data[i]] = 1;
//       }
//     }
//     let count=0;
//     var arr=[]
//     for (key in obj) {
//         console.log(`${key}-${obj[key]}`);
//       if(key==key){
//         count++
//       }
//     }
//     console.log(count);
// }
// }
// if (process.env.USERNAME === "My") {
//   runProgram(`1
//     6
//     1 2 2 3 4 5
//     4 4 3 2 1 1`);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//     read += input;
//   });
//   process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//   });
//   process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0);
//   });
// }
var arr1=[1,2,2,3,4,5]
var arr2=[4,4,3,2,1,1]
left = 0;
right = arr1.length-1;
count = 0;
while(left < arr1.length && right >= 0){
   if (arr1[left] < arr2[right]) {
       left++;
    }
   else if (arr1[left] > arr2[right])
   {

       right--;
   }
   else{
       count++;
       left++;
       right--;
   }
}
console.log(count); 
