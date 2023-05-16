import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"

const ExpenseItem = props => {

  // TODO : add an icon instead of "X" and create a function below to delete expense(s)

  const handleDelete = () => {
    console.log(`Delete "${props.title}" from the expense list.`);
  };
   
  return (
    <Card className="expense-item"> 
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
      </div>
    <button onClick={handleDelete}>X</button>
    </Card>
  )
}

export default ExpenseItem

