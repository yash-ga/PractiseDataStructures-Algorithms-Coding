function upperbound(data,k){
    let low=0;
    let high=data.length-1
    let ans=-1
    while(low<=high){
        let mid=Math.floor(low+(high-low)/2)
        //    console.log(mid);
           if(data[mid]==k){
               ans=mid
               high=mid-1
            }
           else if(data[mid]>k){
               high=mid-1
           }
           else{
               low=mid+1
           }

       }
       return ans
    }
    function lowerbound(data,k){
        let low=0;
        let high=data.length-1
        let ans=-1
        while(low<=high){
            let mid=Math.floor(low+(high-low)/2)
            if(data[mid]==k){
                ans=mid
                low=mid+1
                //  high=mid-1
            }
            else if(data[mid]>k){
                high=mid-1
            }
            else{
                low=mid+1
            }
        }
        return ans
        
    }
    function runProgram(input) {
        var ni=input.split("\n")
        // console.log(ni);
        let nums=ni[0].trim().split(" ").map(Number)
        let k=Number(nums[1])
        let data=ni[1].trim().split(" ").map(Number)
        // console.log(data,k);
        l=(lowerbound(data,k));
        u=(upperbound(data,k));
        console.log(u-l+1);
    
        
        
         
       }

   if (process.env.USERNAME === "My") {
     runProgram(`10 11
     2 5 7 9 10 11 11 11 15 18 20 22`);
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
   