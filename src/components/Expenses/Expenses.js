import Card2 from "../UI/Card2";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
// import './ExpensesFilter'
const Expenses = (props) => {
  return (
    <Card2 className="expenses">
      {/* <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      /> */}
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card2>
  );
};

export default Expenses;
