// let arr = [1,2,3,[4,5,6,[7,8]],9,[10,11], 12];
// let res = [];

// function flatten(res, arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if(typeof arr[i] !== "number") {
//             flatten(res, arr[i]);
//         } else {
//             res.push(arr[i]);
//         }
//     }
// }
 
// flatten(res, arr);

// console.log(res);









let arr = [1,2,3,[4,5,6,[7,8]],9,[10,11], 12];
let res=[];
function flatten(arr,res){
    for(let i=0;i<arr.length;i++){
        if(typeof arr[i]!=="number"){
            flatten(arr[i],res)
        }
        else{
            res.push(arr[i])
        }
    }
}
flatten(arr,res)
console.log(res);