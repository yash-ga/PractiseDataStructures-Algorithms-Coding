let data=[1,2,3,3,3,4,5]
let k=3;
function lowerBound(data,k){
    let low=0;
    let high=data.length-1;
    let ans=-1;
    while(low<=high){
        let mid=low+(Math.floor(high-low)/2)
        if(data[mid]==k){
            ans=mid
            low=mid+1
        }
        else if(data[mid]>k){
            high=mid-1
        }
        else{
            low=mid+1
        }
    }
    return ans


}
function upperBound(data,k){
    let low=0;
    let high=data.length-1;
    let ans=-1;
    while(low<=high){
        let mid=low+(Math.floor(high-low)/2)
        if(data[mid]==k){
            ans=mid
            high=mid-1
        
        }
        else if(data[mid]>k){
            high=mid-1
        }
        else{
            low=mid+1
        }
    }
    return ans


}
let a=lowerBound(data,k)
let b=upperBound(data,k)
console.log(a-b+1);