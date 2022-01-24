function runProgram(input) {
    var ni=input.split("\n")
    console.log(ni);
    let data=ni[1].trim().split(" ").map(Number)
    console.log(data);
    let count=0;
    for(var i=0;i<data.length;i++){

        if(data[i]==0){
            count=1
        }
    }
    if(count==1){
        console.log(0);
    }
    else if(count==0){
        let max=data[0]
        console.log(max);
        for(var j=0;j<data.length;j++){
            if(data[j]<0){

                if(data[j]>max){
                    max=data[j]
                }
            }
        }
        console.log(Math.abs(max));
    }

    
    
     
   }
   if (process.env.USERNAME === "My") {
     runProgram(`100
     -99 99 -98 98 -97 97 -96 96 -95 95 -94 94 -93 93 -92 92 -91 91 -90 90 -89 89 -88 88 -87 87 -86 86 -85 85 -84 84 -83 83 -82 82 -81 81 -80 80 -79 79 -78 78 -77 77 -76 76 -75 75 -74 74 -73 73 -72 72 -71 71 -70 70 -69 69 -68 68 -67 67 -66 66 -65 65 -64 64 -63 63 -62 62 -61 61 -60 60 -59 59 -58 58 -57 57 -56 56 -55 55 -54 54 -53 53 -52 52 -51 51 -50 50`);
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
   