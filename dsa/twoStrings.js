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