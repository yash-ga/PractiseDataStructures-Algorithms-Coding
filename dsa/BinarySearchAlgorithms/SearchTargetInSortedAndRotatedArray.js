let data=[6,7,8,9,1,2,3,4,5]
let target=3;
console.log(find(data,target));
function find(data,target){
    let low=0;let high=data.length-1;
    while(low<=high){
        if(data[mid]==target){
            return mid
        }
        else if(data[low]<=data[mid]){
            if(target>data[low]&&target<=data[mid]){
                high=mid-1
            }
            else{
                low=mid+1
            }
        }
        else if(data[mid]<=data[high]){
            if(target>data[mid]&&target<=data[high]){
                low=mid+1
            }
            else{
                high=mid-1
            }
        }
    }
    return -1
}