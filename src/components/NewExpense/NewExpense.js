import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({onAddExpense}) => {

  const saveNewExpenseData = userInputOfExpenseData => {

    // get the data from the user input and add a basic id 
    const expenseData = {
      ...userInputOfExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);

    
    //after creating an expense, "add expense" button will be shown
    setShowCreateExpenseForm(false);
  };

    const [showCreateExpenseForm, setShowCreateExpenseForm] = useState(false);

    const createNewExpense = () => {
      setShowCreateExpenseForm(true);
    };

    const cancelCreateExpenseForm = () => {
      setShowCreateExpenseForm(false);
    }

  return (
    <div className="new-expense">
      { 
      !showCreateExpenseForm 
      ? <button onClick={createNewExpense}>Add Expense</button>
      : (
        <ExpenseForm 
         onSaveExpenseData={saveNewExpenseData}
         onCancel = {() => cancelCreateExpenseForm()} 
        />
      )}
    </div>
  );
};

export default NewExpense;
