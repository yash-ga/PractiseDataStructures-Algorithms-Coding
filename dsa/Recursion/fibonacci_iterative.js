let n=5;
let st=[0,1] 

for(let i=2;i<=n;i++){
    st.push(st[i-1]+st[i-2])
}

console.log(st);
console.log(st[n]);