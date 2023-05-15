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
  };

  return (
    <div className="new-expense">
      <ExpenseForm 
       onSaveExpenseData={saveNewExpenseData} 
      />
    </div>
  );
};

export default NewExpense;
