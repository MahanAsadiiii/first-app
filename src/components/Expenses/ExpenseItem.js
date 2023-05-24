import React from "react"; //have to call useState for using ablity of import S.t after loading

import "./ExpenseItem.css";
import Card2 from "../UI/Card2";   // two . is for calling file from the privous file 
import ExpenseDate from "./ExpenseDate";


const ExpenseItem = (props) => {
  
  return (
    <li>
    <Card2 className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card2>
    </li>
  );
};

export default ExpenseItem;
