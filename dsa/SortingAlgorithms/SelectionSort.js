let data=[9,8,7,6,5];
for(let i=0;i<data.length;i++){
    let min=i;
    for(let j=i+1;j<data.length;j++){
        if(data[i]>data[j]){
            min=j;
            let temp=data[i]
            data[i]=data[min]
            data[min]=temp;
        }
    }
}
console.log(data);