import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import { useState } from "react";



function ExpenseItem(props) {
  const[title, setTitle] = useState(props.title);
  function buttonClickHandler() {
    setTitle("New Title");
  }
  return (
    <Card className="expense-item">
    <ExpenseDate date={props.date} /> 
        <div className="expense-item__location">{props.location}</div>
        <div className="expense-item__description">
          <h2>{title}</h2>
        <div className="expense-item__price">{props.price}$</div>
      </div>
      {/* <button onClick={buttonClickHandler}></button> */}
    </Card>
  )
}

export default ExpenseItem;