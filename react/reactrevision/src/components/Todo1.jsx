import { useState } from "react"

export const Todo1=()=>{
    const [text,settext]=useState('')
    const [todo,settodo]=useState([])
    const hndlchng=(e)=>{
        console.log(e.target.value);
        settext(e.target.value)
    }
    const btnchng=()=>{
        settodo([...todo,text])
    }

    return(
        <div>
            <title>todolist</title>
            <h1>todo</h1>
            <input type="text" placeholder="type your task here" onChange={hndlchng} value={text} />
            <button onClick={btnchng}>add</button>

            {
                todo.map((e)=>{
                    return(<div key={e.id}>{e}</div>)
                })
            }
        </div>
    )
}
