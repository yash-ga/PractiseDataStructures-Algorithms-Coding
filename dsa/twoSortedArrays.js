
var arr1=[1,2,2,3,4,5]
var arr2=[4,4,3,2,1,1]
left = 0;
right = arr1.length-1;
count = 0;
while(left < arr1.length && right >= 0){
   if (arr1[left] < arr2[right]) {
       left++;
    }
   else if (arr1[left] > arr2[right])
   {

       right--;
   }
   else{
       count++;
       left++;
       right--;
   }
}
console.log(count); 
