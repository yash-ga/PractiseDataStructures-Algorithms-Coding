import { useState } from "react";

export const Todo = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [arr,setArr]=useState([])
  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeAmount = (e) => {
    setAmount(e.target.value);
  };
  const changeDate = (e) => {
    setDate(e.target.value);
  };
  const submitForm = (e) => {
    e.preventDefault();
    // making the data in object format
    // let arr1=[
    //     title:title,
    //     amount:amount,
    //     date:new Date(date)//using new Date inbuilt to change date in date format
    // ]
    // console.log(arr1);
    //setting inputs blank after done
    setTitle('')
    setAmount('')
    setDate('')
    setArr([...arr,title,amount,date])
  };
  
  return (
    <div>
      <h1>learning</h1>
      <form onSubmit={submitForm}>
        <div>
          <div>
            <label>title</label>

            <input
              type="text"
              placeholder="expense-name"
              onChange={changeTitle}
              value={title}
            />
          </div>
          <div>

            <label>amount</label>
            <input
              type="number"
              placeholder="expense-amount"
              onChange={changeAmount}
              value={amount}
            />
          </div>
          <div>
            <label>date</label>
            <input
              type="date"
              placeholder="expense-date"
              onChange={changeDate}
              value={date}
            />
          </div>
        </div>
        <div>
          <button type="submit" >add expense</button>
        </div>
        
      
        </form>
      {
        arr.map((e)=>{
          return(
        <div>
          <div>{e}</div>
        <div>{e.title}</div>
          <div>{e.amount}</div>
          <div>{e.date}</div>
          </div>)})
}

      
      
      

    </div>
  );
};

