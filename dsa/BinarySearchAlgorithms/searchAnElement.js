// console.log('yash');
let data=[5,4,3,2,1]
let k=3;
function search(data,k){
    let low=0;let high=data.length-1;let ans=-1;

    while(low<=high){
        let mid=low+(Math.floor((high-low)/2))
        // console.log(mid);
        if(data[mid]==k){
        ans=mid
    }
    else if(data[mid]>k){
        high=mid-1
    }
    else{
        low=mid+1;
    }
}
return ans
}
console.log(search(data,k));