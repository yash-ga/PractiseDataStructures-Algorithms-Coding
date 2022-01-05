function lowerbound(array,  k){ //This function finds out the lowerbound of K
      var  low = 0;var  high = array.length - 1
       var ans = -1 //if the value of lowerbound is -1, indicating that the element is not present.
        while (low <= high){

        
            var mid = Math.floor(low + (high - low)/2)
            if (array[mid] == k){

                ans = mid
                high = mid - 1
            }
            else if (array[mid] > k){

                high = mid - 1
            }
            else {

                low = mid + 1
            }
        }
        return ans
}
function upperbound( array,  k){

 //This function finds out the upperbound of K
        var low = 0;var high = array.length - 1
       var  ans = -1 //if the value of lowerbound is -1, indicating that the element is not present.
        while (low <= high){
           var mid = Math.floor(low + (high - low)/2)
            if (array[mid] == k){

                ans = mid
                low = mid + 1
            }
            else if (array[mid] > k){

                high = mid - 1
            }
            else {

                low = mid + 1
            }
        }
        return ans
}

function runProgram(input) {
    // console.log(process.env.USERNAME);
    var ni=input.split("\n")
    // console.log(ni);
    var num=ni[0].trim().split(" ").map(Number)
    var array=ni[1].trim().split(" ").map(Number)
    var k=Number(num[1])
    // console.log(k);
    // console.log(array);
   var l= lowerbound(array,k)
  //  console.log(l);
   var h= upperbound(array,k)
  //  console.log(h);
    console.log(h-l+1);
    

    
  }
  if (process.env.USERNAME === "My") {
    runProgram(`6 3
    2 4 4 4 6 9`);
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
  