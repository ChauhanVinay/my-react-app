import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";

function Expenses(props) {
     const expenses = [
    {
    id: '1',
   date: new Date(2023, 7, 15),
   title: 'Insurance', price: 100, location: 'Bangalore'
},
    {
      id: '2',
       date: new Date(2023, 8, 5),
        title: 'Book', price: 500, location: 'Delhi'
      },
    {
      id: '3',
       date: new Date(2023, 9, 10),
        title: 'Pen',
         price: 50, location: 'Hyderabad'
        },
    {
      id: '4',
       date: new Date(2023, 10, 20),
        title: 'Laptop',
         price: 300, location: 'Mumbai'
        },          
   ];

   return (
    <Card className="expenses">
     {expenses.map((expense, index) => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            location={expense.location}
            title={expense.title}
            price={expense.price}
          />
      ))}
    </Card>
   );
}

export default Expenses;