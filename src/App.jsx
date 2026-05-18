
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import ExpenseItem from './components/ExpenseItem'
import Footer from './Footer'
import './App.css'

function App() {
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
    <>
      <section id="center">
        <div className="hero">
<img src={heroImg} className="base" width="170" height="179" alt="Hero"/>
<img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Let's Get started</h1>
        </div>
       
      {expenses.map((expense, index) => {
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            location={expense.location}
            title={expense.title}
            price={expense.price}
          />
        );
      })}

        <Footer />
      </section>
    </>
  );
}

export default App
