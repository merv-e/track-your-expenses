import ExpenseItem from './ExpenseItem';
import "./Expenses.css"
import Card from '../UI/Card';
import ExpenseFilter from '../NewExpense/ExpenseFilter';


const Expenses = props => {
  
  const filterChangeHandler= year => {
    console.log(year);
  };

  return (
    <>
      <Card className="expenses">
        <ExpenseFilter 
         onSelectFilter={filterChangeHandler}
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