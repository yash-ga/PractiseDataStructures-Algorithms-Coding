let a=[9,8,7,6,5,4,3,2,1]
let l=0;let r=a.length-1;
console.log(mergeSort(a,l,r))
function mergeSort(a,l,r){
    if(l<r){

        let mid=Math.floor(l+r/2)
        mergeSort(a,l,mid)
        mergeSort(a,mid+1,r)
        (merge(a,l,mid,r))
    }
    return a
}
function merge(a,l,r){
    let i=l;let j=mid+1; let k=l; let b=[]
   while(i<=mid&&j<=r){
       if(a[i]<a[j]){
           b[k]=a[i]
           i++
       }
       else{
           b[k]=a[j]
           j++
       }
       k++;

   }
   if(i>mid){
       while(j<=r){
           b[k]=a[j]
           k++;
           j++;
       }
   }
   else{
       while(i<=mid){
           b[k]=a[i]
           k++;
           i++;
       }
   }
   for(let k=l;k<=r;k++){
       a[k]=b[k]
   }
}

