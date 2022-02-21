let data=[6,7,8,2,3,4,5]
console.log(minimum(data));
function minimum(data){
    let high=data.length-1
    let low=0;
    let ans=-1;
    let mid=Math.floor(low+(high-low)/2)
    if(data[low]<=data[high]){
        ans=data[0]
    }
    while(low<=high){
        if(data[mid]>data[mid+1]){
            ans=data[mid+1]
        }
        else if(data[mid]<data[mid+1]){

            ans=data[mid]
        }
        else if(data[low]<=data[mid]){
            low=mid+1
        }
        else{
            high=mid-1
        }
    }
    return ans;

}