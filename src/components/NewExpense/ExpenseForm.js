import React, { useState } from "react";
import "./ExpenseForm.css"

const ExpenseForm = () => {

  // You can use two ways of using useState:

  // one way is using three useState statements for title, amount and date values and update them accordingly. ex : const [title, setTitle] = useState(""); etc...

  // and the other way is, as shown below, using a single state to hold all user inputs and updating the values this way.

  const [inputValue, setInputValue] = useState({
    titleInput : "",
    amountInput : "",
    dateInput : "",
  });

  const handleTitleChange = (ev) => {
    setInputValue((prevState) => {
      return { 
        ...prevState, 
        titleInput: ev.target.value 
      };
    });
  };

  const handleAmountChange = (ev) => {
   setInputValue((prevState) => {
      return {
        ...prevState, 
        amountInput: ev.target.value,
      }
    });
  };

  const handleDateChange = (ev) => {
    setInputValue((prevState) => {
      return {
        ...prevState, 
        dateInput: ev.target.value
      }
    });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    // setTitle("");
    // setDate("");
    // setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={inputValue.titleInput}
            onChange={handleTitleChange}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={inputValue.amountInput}
            onChange={handleAmountChange}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2022-12-31"
            value={inputValue.dateInput}
            onChange={handleDateChange}
          />
        </div>
      </div>

        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
    </form>
  );
}

export default ExpenseForm