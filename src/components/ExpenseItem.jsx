import "./ExpenseItem.css";

function ExpenseItem(props) {
  // const expenseDate = new Date(2023, 7, 15).toISOString();
  // const expenseTitle = "Insurance";
  // const expanseAmount = 50;
  // const expenseLocation = "Bangalore";
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
        <div className="expense-item__location">{props.location}</div>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
        <div className="expense-item__price">{props.price}$</div>
      </div>
    </div>
  )
}

export default ExpenseItem;