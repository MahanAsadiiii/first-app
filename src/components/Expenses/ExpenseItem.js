import React, { useState } from "react"; //have to call useState for using ablity of import S.t after loading

import "./ExpenseItem.css";
import Card2 from "../UI/Card2";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title); //its for input something after load

  const clickHandler = () => {
    setTitle("updated");
    console.log(title);
  };

  return (
    <Card2 className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card2>
  );
};

export default ExpenseItem;
