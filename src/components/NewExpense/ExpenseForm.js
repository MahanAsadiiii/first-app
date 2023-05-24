import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [EnteredTitle, setEnteredTitle] = useState(""); //writing these lines for changing the values after completing landing page load
  const [EnteredAmount, setEnteredAmount] = useState("");
  const [EnteredDate, setEnteredDate] = useState("");

  // const[userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enterdAmount:'',                                   //alternative way to change values in ract project
  //     enteredData: ''
  // })

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // setUserInput({
    //     ...userInput,                                                 //alternative way
    //     enteredTitle: event.target.value
    // })

    // setUserInput((prevState) => {
    //     return {...prevState, enteredTitle: event.target.value}        //second alternative way to change Values but its better than the previous one bcs it the latest state that update
    // })
  };

  const AmountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // setUserInput({
    //     ...userInput,                                                //alternative way
    //     enteredAmount: event.target.value
    // })
  };

  const DataChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // setUserInput({
    //     ...userInput,                                                 //alternative way
    //     enteredData: event.target.value
    // })
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: EnteredTitle,
      amount: +EnteredAmount,
      date: new Date(EnteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={EnteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={EnteredAmount}
            onChange={AmountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2024-01-01"
            value={EnteredDate}
            onChange={DataChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
