function runProgram(input) {
    // console.log(process.env.USERNAME);
    var ni=input.split("\n")
    console.log(ni);
    for(var i=1;i<ni.length;i=i+2){
        var nums=ni[i].trim().split(' ').map(Number)
        console.log(nums);
        var k=Number(nums[1])
        console.log(k);
        var arr1=ni[i+1].trim().split(' ').map(Number)
        console.log(arr1);
        var left=0;
        var right=arr1.length-1
        var count=0;
        while(left < arr1.length && right >= 0){
            if (arr1[left] + arr1[right]<k) {
                left++;
             }
            else if (arr1[left] + arr1[right]>k)
            {
         
                right--;
            }
            
            else if( arr1[left]+arr1[right]==k){
                count=count+left-right
                console.log(count);
                break;
                left++
                right--
            }

         }

    }
    
  }
  if (process.env.USERNAME === "My") {
    runProgram(`1
    5 7
    1 2 3 4 5`);
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
  