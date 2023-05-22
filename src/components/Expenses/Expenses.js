import ExpenseItem from './ExpenseItem';
import "./Expenses.css"
import Card from '../UI/Card';
import ExpenseFilter from '../NewExpense/ExpenseFilter';
import { useState } from 'react';

const Expenses = props => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const filterChangeHandler = (year) => {
    setSelectedYear(year);
    console.log(year);
  };

  const filteredExpensesByYear = props.expenses
    .filter((expense) => expense.date.getFullYear().toString() === selectedYear) 

  return (
    <>
      <Card className="expenses">
        <ExpenseFilter
          onSelectFilter={filterChangeHandler}
          selected={selectedYear}
        />
        {filteredExpensesByYear.length === 0 ? (
          <p className="noExpense">No expenses have been found.</p>
        ) : (
          filteredExpensesByYear.map((e) => (
            <ExpenseItem
              key={e.id}
              id={e.id}
              title={e.title}
              amount={e.amount}
              date={e.date}
            />
          ))
        )}
      </Card>
    </>
  );
}

export default Expenses