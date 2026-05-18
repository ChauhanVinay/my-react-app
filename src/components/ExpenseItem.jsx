import "./ExpenseItem.css";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function ExpenseItem(props) {
  // const expenseDate = new Date(2023, 7, 15).toISOString();
  // const expenseTitle = "Insurance";
  // const expanseAmount = 50;
  // const expenseLocation = "Bangalore";
 const month = months[props.date.getMonth()];
 const year = props.date.getFullYear();
 const day = props.date.getDate();

  return (
    <div className="expense-item">
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
     </div>
        <div className="expense-item__location">{props.location}</div>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
        <div className="expense-item__price">{props.price}$</div>
      </div>
    </div>
  )
}

export default ExpenseItem;