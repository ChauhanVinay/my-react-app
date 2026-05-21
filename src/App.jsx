// import ExpenseItem from './components/ExpenseItem'
import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Footer from "./Footer";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: "1",
      date: new Date(2023, 7, 15),
      title: "Insurance",
      price: 100,
      location: "Bangalore",
    },
    {
      id: "2",
      date: new Date(2023, 8, 5),
      title: "Book",
      price: 500,
      location: "Delhi",
    },
    {
      id: "3",
      date: new Date(2023, 9, 10),
      title: "Pen",
      price: 50,
      location: "Hyderabad",
    },
    {
      id: "4",
      date: new Date(2023, 10, 20),
      title: "Laptop",
      price: 300,
      location: "Mumbai",
    },
  ]);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <>
      <section id="center">
        <div>
          <h1>Let's Get started</h1>
          <NewExpense onAddExpense={addExpenseHandler} />
          <Expenses expenses={expenses}></Expenses>
        </div>

        <Footer />
      </section>
    </>
  );
}

export default App;
