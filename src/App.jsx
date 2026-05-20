// import ExpenseItem from './components/ExpenseItem'
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Footer from "./Footer";

function App() {
  return (
    <>
      <section id="center">
        <div>
          <h1>Let's Get started</h1>
          <NewExpense />
          <Expenses></Expenses>
        </div>

        <Footer />
      </section>
    </>
  );
}

export default App;
