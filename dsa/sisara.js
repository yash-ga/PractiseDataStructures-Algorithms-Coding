function search(data,k){
    var low=0;
    var high=data.length-1;
    while(low<high){
        var mid=Math.floor(low+(high-low)/2)
        // console.log(mid);
        // 3 4 5 1 2
        if(data[mid]==k){
            return mid
        }
        else if(data[low]<=data[mid]){
            //low to mid is sorted
            if(k>=data[low]&&k<data[mid]){//1>=3 1<5
                high=mid-1
            }
            else{
                low=mid+1
            }
        }
            else if(data[mid]<=data[high]){
                //mid to high is sorted
                if(k>data[mid]&&k<=data[high]){
                    low=mid+1
                }
                else{
                    high=mid-1
                }
        }
    }
    return -1
}

function runProgram(input) {
    var ni=input.split("\n")
    // console.log(ni);
    var nums=ni[0].trim().split(" ").map(Number)
    var k=Number(nums[1])
    // console.log(k);
    var data=ni[1].trim().split(" ").map(Number)
    // console.log(data);
    console.log(search(data,k));
    
     
   }
   if (process.env.USERNAME === "My") {
     runProgram(`5 1
     3 4 5 1 2`);
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
   