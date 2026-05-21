// import ExpenseItem from './components/ExpenseItem'
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Footer from "./Footer";

function App() {
 
  const addExpenseHandler = (expense) => {
    console.log(expense);
  }

  return (
    <>
      <section id="center">
        <div>
          <h1>Let's Get started</h1>
          <NewExpense onAddExpense={addExpenseHandler}/>
          <Expenses></Expenses>
        </div>

        <Footer />
      </section>
    </>
  );
}

export default App;
