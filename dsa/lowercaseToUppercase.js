// // 
// const string = 'a';

// // convert into ASCII value
// const result = string.charCodeAt(0);

// console.log(`The ASCII value is: ${result-32}`);
// // console.log(97-65);
// function convertUpperCase(str) {
//     let arr = str.split('');
//     console.log(arr);
//     let output = [];
//     let temp;
//     for(let i = 0; i < arr.length; i++) {//97=a 65=A 
//       if(arr.charCodeAt(i) >= 97 && arr.charCodeAt(i) <= 122) {
//         temp = String.fromCharCode((arr.charCodeAt(i) - 32))
//         output.push(temp)
//       } else {
//         output.push(arr[i])
//       }
//     }
//     return output.join('')
//   }
  
//   console.log(convertUpperCase('hello'))
// let data=97
// console.log(String.fromCharCode(data));
  // let data='yash'
  // let arr=[]
  // for(let i=0;i<data.length;i++){
  //     console.log(data.charCodeAt(i));
  //     arr.push(String.fromCharCode(data.charCodeAt(i)-32));
  // }
  // console.log(arr.join(""));
  /**
 * @param {number[]} nums
//  * @return {number}
 */
let nums=[1,1,2,2,3,3,8]
console.log(nums.reduce((a,b)=>{ return a^b}));

// var singleNumber = function (nums) {
//   let singleNumber = 0;
//   const length = nums.length;

//   for (let i = 0; i < length; i++) {
//     singleNumber ^= nums[i];
//   }

//   return singleNumber;

//   // Alternatively, a single line solution
//   // return nums.reduce((a, b) => a ^ b);
// };
// console.log(singleNumber(nums));
