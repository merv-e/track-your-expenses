import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"

const ExpenseItem = props => {
  const [title, setTitle] = useState(props.title)
  // let title = props.title;

  const handleDelete = () => {
    setTitle("Updated!")
    // console.log(title);
  };
   
  return (
    <Card className="expense-item"> 
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{props.amount}</div>
      </div>

      {/* TODO : change the button as an icon */}
    <button onClick={handleDelete}>Update</button>
    
    </Card>
  )
}

export default ExpenseItem

