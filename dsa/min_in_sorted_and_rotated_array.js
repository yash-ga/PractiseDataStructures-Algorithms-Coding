var arr=[4,5,6,7,8,9,10,1,2]
var n=arr.length
function min(arr,n){
    var low=0;
    var high=n-1;
    if(arr[low]<=arr[high]){
        return 0
    }
    while(low<high){
        var mid=Math.floor(low+(high-low)/2)
        if(arr[mid]>arr[mid+1]){
            return mid+1
        }
        else if(arr[mid]<arr[mid-1]){
            return mid
        }
        else if(arr[low]<arr[mid]){
            low=mid+1
        }
        else{
            high=mid-1
        }
    }
    return -1
}
console.log(min(arr,n));