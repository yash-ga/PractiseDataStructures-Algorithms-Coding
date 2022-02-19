let a=[9,8,7,6,5,4,3,2,1]
let l=0;let r=a.length;let k=l;
function mergeSort(a,l,r){
    if(l<r){

        let mid=Math.floor(l+r/2)
        mergeSort(a,l,mid)
        mergeSort(a,mid+1,r)
        merge(a,l,mid,r)
    }
    return a
}
function merge(a,l,r){
    let i=l;let j=r; let k=l; let b=[]
    if(a[i]<a[j]){
        while(j<=r){
            
        }
    }
}

