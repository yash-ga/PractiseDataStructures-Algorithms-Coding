let arr=[900,940,950,1100,1500,1800]
let dep=[910,1200,1120,1130,1900,2000]
let plat=1;let res=1; let i=1;let j=0;
let n=arr.length
while(i<n && j<n){
if(arr[i]<=dep[j]){
    plat++
    i++
}
else if(arr[i]>dep[j]){
    plat--;
    j++;
}
if(plat>res){
    res=plat;
}
}
console.log(res);