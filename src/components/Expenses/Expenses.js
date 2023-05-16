import ExpenseItem from './ExpenseItem';
import "./Expenses.css"
import Card from '../UI/Card';
import ExpenseFilter from '../NewExpense/ExpenseFilter';
import { useState } from 'react';

const Expenses = props => {
  const [selectedYear, setSelectedYear] = useState(2019);

  const filterChangeHandler= year => {
    setSelectedYear(year);
    console.log(year);
  };

  return (
    <>
      <Card className="expenses">
        <ExpenseFilter 
         onSelectFilter={filterChangeHandler}
         selected = {selectedYear}
        />
        {props.expenses.map((e) => (
          <ExpenseItem
            key={e.id}
            id={e.id}
            title={e.title}
            amount={e.amount}
            date={e.date}
          />
        ))}
      </Card>
    </>
  );
}

export default Expenses