// Find pair of  numbers whose sum is closest to the given target in a sorted array
var arr=[0,3,5,8,9,1]
var k=19;
var ans=0;
var l=0;
var h=arr.length-1
// var ans=-1
while(l<h){
    if(arr[l]+arr[h]==k){
        
        console.log(arr[l],arr[h]);
        break;
    }
    else if(arr[l]+arr[h]>k){
        h--
    }
    else if(arr[l]+arr[h]<k){
        // ans=arr[l]+arr[h]

        l++
    }

}