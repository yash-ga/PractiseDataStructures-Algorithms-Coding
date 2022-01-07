var data=[1 ,2 ,3 ,1, 4, 5, 2 ,3 ,6]
var max=data[0]
for(var i=0;i<data.length;i++){
    if(data[i]>max){
        max=data[i]
    }
}
console.log(max);