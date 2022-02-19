
// __________practising merge sort 2

function ms(a,l,r){
    if(l<r){
        let mid=Math.floor(l+(r-l)/2)
        ms(a,l,mid)
        ms(a,mid+1,r)
        merge(a,l,mid,r)
    }
    return a
}
function merge(a,l,mid,r){
    let i=l;let j=mid+1;let k=l; let b=[];
    while(i<=mid&&j<=r){
      if ( a[i]<=a[j]){
          b[k]=a[i]
          i++;
      }
      else{
          b[k]=a[j]
          j++;
      }
      k++;
    } 
    if(i>mid){
        while(j<=r){
            b[k]=a[j]
            k++
            j++;
        }
    }
    else{
        while(i<=mid){
            b[k]=a[i]
            k++
            i++;
        }
    }
    for(let k=l;k<=r;k++){
        b[k]=a[k]
    }
}
function runProgram(input) {
    
    
    let a=input.split(" ").map(Number)
    let l=0;let r=a.length-1;
    console.log( ms(a,l,r));
     
    
     
   }
   if (process.env.USERNAME === "My") {
     runProgram(`4 6 1 2 7 3`);
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
   
