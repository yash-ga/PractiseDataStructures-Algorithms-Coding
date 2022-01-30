function runProgram(input) {
    var ni=input.split("\n")
    
    let a=ni[1].trim().split(" ").map(Number)
 
    let l= 0;let r=a.length-1

console.log(mergeSort(a,l,r));


    
}
function mergeSort(a,l,r){
    if(l<r){
        let mid=Math.floor(l+(r-l)/2)
        mergeSort(a,l,mid)
        mergeSort(a,mid+1,r)
        merge(a,l,mid,r)
    }
    return a
}
function merge(a,l,mid,r){
    let i=l;let j=mid+1;let k=l;let b=[]
    while(i<=mid&&j<=r){
        if(a[i]<a[j]){
            b[k]=a[i]
            i++;
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

    
     
   if (process.env.USERNAME === "My") {
     runProgram(`1
     9 4 7 6 3 1 5`);
   } else {
     process.stdin.resume();
     process.stdin.setEncoding("ascii");
     let read = "";
     process.stdin.on("data", function (input) {
       read += input;
     });
     process.stdin.on("end", function () {
       read = read.replace(/\n$/, "");
       read = read.replace(/\n$/, "");
       runProgram(read);
     });
     process.on("SIGINT", function () {
       read = read.replace(/\n$/, "");
       runProgram(read);
       process.exit(0);
     });
   }
   