let data=[12,34,45,9,8,90,3,98,89]
let left=0;let right=data.length-1
while(left<right){
    while(data[left]%2==0&&left<right){
        left++
    }
    while(data[right]%2==1&&left<right){
        right--
    }
    if(left<right){
    let temp=data[left]
    data[left]=data[right]
    data[right]=temp
    left++
    right--
    }
    
}
console.log(data);