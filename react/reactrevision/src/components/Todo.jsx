// import { useState } from "react"

export const Todo=()=>{
// const [title,setTitle]=useState('')
    return(
        <div>
            <h1></h1>
            <form >
                <div>

                <div>
                    <label >title</label>

                <input type="text" placeholder="expense-name"  />
                </div>
                <div>
                <label >amount</label>
                <input type="number" placeholder="expense-amount"  />
                </div>
                <div>
                <label >date</label>
                <input type="date" placeholder="expense-date"  />
                </div>
                </div>
            </form>
        </div>
    )
}