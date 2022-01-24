let arr = [1,2,3,[4,5,6,[7,8]],9,[10,11], 12];
 
function flatten(res, arr) {
    for (let i = 0; i < arr.length; i++) {
        if(typeof arr[i] !== "number") {
            flatten(res, arr[i]);
        } else {
            res.push(arr[i]);
        }
    }
}
 
let res = [];
flatten(res, arr);
 
console.log(res);