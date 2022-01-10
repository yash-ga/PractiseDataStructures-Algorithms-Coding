var data=[100,80,60,70,60,75,85]
// var arr=[0,1,3];out=[1,1,1,2,1,2]//we are taking two empty stacks
var arr=[];out=[]
for(var i=0;data.length;i++){//we are looping through data 
    while(arr.length!=0&&data[arr[arr.length-1]]<=data[i]){//60<=75
        arr.pop()
        console.log(arr);
    }
    console.log(arr);
    if(arr.length==0){
        out.push(i+1)
    }
    else{
        out.push(i-arr[arr.length-1])//
    }
    arr.push(i)
}
console.log(out.join(" "));