import React from 'react'
import ExpenseItem from './ExpenseItem';
import "./Expenses.css"
import Card from './Card';


const Expenses = (props) => {
  return (
    <Card className='expenses'>
        { props.expenses.map( e => 
            <ExpenseItem
              key={e.id}
              id={e.id}
              title={e.title}
              amount={e.amount}
              date={e.date}
            />
        )}
    </Card>    
  );
}

export default Expenses