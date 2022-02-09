let part1={
    "name":"a",
    "battery":30,
    charge:function(a,b){
        this.battery=this.battery+a+b;
        console.log(this.battery);
      
    }
}
let part2={
    "name":'l',
    'battery':40
}

// part1.charge.apply(this.battery,[20,30])
let bnd=part1.charge.bind(part2,20,30)
bnd()
// part1.charge
console.log(part1);
console.log(part2);

//the best simple example to understand CAB
function get(a,b){

    console.log(100+a+b);
}
get.call(this,1,2)//takes arg directly
get.apply(this,[1,2])//takes array of args
let ans1=get.bind(this,1,2)//takes a func 
ans1()//which can be invoked at later point of time