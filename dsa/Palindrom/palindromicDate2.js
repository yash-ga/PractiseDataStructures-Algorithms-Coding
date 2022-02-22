//two pointer approach 
let data='22022022'
let low=0;let high=data.length-1;
let palindrom=false;
while(low<=high){
    if(data[low]==data[high]){
        palindrom=true;
        low++;
        high--;
    }
    
}
// console.log(palindrom);
if(palindrom){
    console.log('its a palindromic date');
}
else{
    console.log('its a normal date');
}