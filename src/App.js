import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import  CopyRight  from "./components/CopyRight";

const Dummy_Expenses = [
  {
    id: "e1",
    title: "food",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },

  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },

  { 
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },

  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(Dummy_Expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div style={{backgroundColor: "black", height: "100vh", paddingTop: "50px"}}>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      <CopyRight/>
    </div>
  );
};

export default App;
