//hashmap approach to solve palindrom
let data='22022022'
let obj={}
for(let i=0;i<data.length;i++){
    if(obj[data[i]]=obj[data[i]]){
        obj[data[i]]=obj[data[i]]+1
    }
    else{
        obj[data[i]]=1
    }
}
let count=0;
for(key in obj){
    if(obj[key]%2==1)
    count++;
}
if(count==0||count==1){
    console.log('it can be a palindrom');
}
else{
    console.log('it cant become a palindrom');
}