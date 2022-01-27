// function main(){
//     var a=20;
//     let update=()=>{
//         var a=300
//         a=a;
//     }
//     update()
//     console.log(a);
// }
// main()
// console.log(x);
// x=3;
// var x;
// (function(a){
// console.log(a);
// })("yash")
// function add (a) {
//     return function(b){
//         return function(c){

//             return a + b+c;
//         }
//     }
//   }
  
 
//   console.log( add(3)(4)(1));
// {
// //     var x=9
// //     console.log(x);
// // }
// function a(v,b){
// console.log(v+b);
// }
// a(3,4)
// var arr=[1,2,2,3]
// if(Array.isArray(arr)==true){
//     console.log('yes');
// }
// var arr=[0, 1, 2, [[[3, 4]]]]
// console.log(arr.flat());

// console.log(36%60);
// arr=[1,2,[3,4,5,[6,7,8]]]
// output=[1,2,3,4,5,6,7]

// arrival=[9,     9.40, 11.00,18,20]
// departue=[10.10,12.00,19,      21]
// let yash="push"
// let yash="ranu"
// var yash;
// console.log(yash);
// let x='fog'
// function first(){
//     console.log(x);
// }
// function second(){
//     let x='log'
//     first()
// }
// x='dog';
// second()
// const x=4
// const y=4
// const sum=x+y
// console.log(sum);
// let arr=[1,2,[5,4,3,[6,7,8]]]
// let res=[]
// function flatten(arr,res){
//     for(let i=0;i<arr.length;i++){
//         if(typeof arr[i]!=="number"){
//             console.log(arr[i]);
//             flatten(arr[i],res)
//         }
//         else{
//             console.log(arr[i]);
//             res.push(arr[i])
//         }
//     }
// }
// flatten(arr,res)
// console.log(res);
const bark= {
    // var animal='dog'
    // return animal
    // return('Woof!');
  }
  
//   bark.animal = 'dog';
//   console.log(bark());

// bark.a="cy"
// bark.b="cz"
// bark.c="ca"
// console.log(bark.length);
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     return firstName+ lastName
//   }
  
//   const lydia = new Person('Lydia', 'Hallie');
//   const sarah =  Person('Sarah', 'Smith');
  
//   console.log(lydia);
//   console.log(sarah);
function getPersonInfo(one, two, three) {
    console.log(one);
    console.log(two);
    console.log(three);
  }
  
  const person = 'Lydia';
  const age = 21;
  
  getPersonInfo`${person} is ${age} years old`;