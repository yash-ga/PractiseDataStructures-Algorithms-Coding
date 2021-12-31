async function getdata(){
    var div=document.getElementById("container")
    var q=document.getElementById("input").value
    try{
    var res=await fetch(`http://localhost:3000/result?name=${q}`)
    var data=await res.json()
    console.log(data);
    
    data.forEach(({id,name,img})=>{
        // if(name===q){
        // let id1=document.createElement('p')
        // id1.innerText= `movie id:${data.id}`  
        // let name1=document.createElement('h1')
        // name1.innerText=`movie name:${data.name}`  
        // let img1=document.createElement('img')
        // img1.src=`movie image:${data.img}`  
        // let div1=document.createElement('div')
        
        // div1.append(img1,id1,name1)
        div.innerHTML=`<div>
        <img src="${img}"/>
        <p>${id}</p>
        <h1>${name}</h1>
        </div>
        `
    })
            }
            catch(err){
                console.log('err',err);
            }
        


}
getdata()