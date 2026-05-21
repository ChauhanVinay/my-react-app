import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    // const [enteredTitle, setEnteredTitle] = useState("");
    // const [enteredAmount, setEnteredAmount] = useState("");
    // const [enteredDate, setEnteredDate] = useState("");

    // Alternative way to manage multiple state variables in a single state object
    const [userInput, setUserInput] = useState({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: "",
    });

    const titleChangeHandler = (event) => {
       setUserInput((prevState) => {
        return {
            ...prevState,
            enteredTitle: event.target.value,
        }
       })
    };

    const amountChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredAmount: event.target.value,
            }
        })
    };
        
    const dateChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredDate: event.target.value,
            }
        })
    };

    const formSubmitHandler = (event) => {
      event.preventDefault();
      const expenseData  = {
        title: userInput.enteredTitle,
        amount: userInput.enteredAmount,
        date: new Date(userInput.enteredDate),
      }
      console.log(expenseData);
      // Clear the form after submission
      setUserInput({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: "",
      });
    }
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input type="text" value={userInput.enteredTitle} id="title" onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input type="number" value={userInput.enteredAmount} id="amount" min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            value={userInput.enteredDate}
            id="date"
            min="2020-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
