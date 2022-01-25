// function myf(y1,y2,...y3){
//     const [x1,...[res]]=y3
//     console.log(res)

// }
// const m=['k','j','h','d']
// // myf(...m)
// const obj={
//     prop:1
// }
// console.log(obj.prop);
// Object.defineProperty(obj,'prop',{
//     w:false,
//     value:2
// })
// console.log(obj.prop);
// obj.prop=3
// console.log(obj.prop);
// async function api(){
//     return new Promise(res=>{
//         setTimeout(()=>{res})
//     })
// }
// "use strict"
// let green;
// grnee=false;
// console.log(grnee);

// const my=new Array(2)
// my[1]=1
// my[3]=3
// console.log('l',my.length);
// console.log('e');
// for(const el of my){
//     console.log('\t',el);
// }
// let my=[1,2]
// my.customProperty=true
// for(const el of my){
//     console.log(el);
// }
const socket=new WebSocket('wss.lklk')
function mh(e){
    console.log(e.data);
}
socket.onmessage=(mh)
// window.addEventListener('mes',mh)
// window.onmessage=mh