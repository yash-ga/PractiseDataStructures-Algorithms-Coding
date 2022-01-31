function runProgram(input) {
    var ni=input.split("\n")
    // console.log(ni);
    
    let data=ni[1].trim().split(" ").map(Number)
    // console.log(data);
    let a=(sorted(data));
    console.log(a);
    if(a==-1){
        console.log('No');

    }
    else{
        console.log('Yes');
    }

     
   }
   function sorted(data){
       let low=0;let high=data.length-1;let ans=-1
       while(low<=high){
           let mid=Math.floor(low+(high-low)/2)
           if(data[mid]<data[mid-1]){//9<7
            ans=mid
           }
         else  if(data[mid]>data[mid+1]){//9>1
            ans=mid+1
        }
        else if(data[low]<=data[mid]){
            low=mid+1
        }
        else{
            high=mid-1
        }
           

    }
    return ans

    }
       if (process.env.USERNAME === "My") {
           runProgram(`6
     3 4 7 9 1 2`);
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
   