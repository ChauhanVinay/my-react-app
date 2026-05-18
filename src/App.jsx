
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import ExpenseItem from './components/ExpenseItem'
import Footer from './Footer'
import './App.css'

function App() {
 

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
       
        <ExpenseItem 
          date={new Date(2023, 7, 15)}
          location="Bangalore"
          title="Insurance"
          price={50}
        />
        <ExpenseItem 
          date={new Date(2026, 3, 25)}
          location="Delhi"
          title = "Book"
          price="20"
        />
        <ExpenseItem
         date={new Date(2026, 5, 10)}
          location="Hyderabad"
          title = "Food"
          price="30"
         />
        <ExpenseItem 
          date={new Date(2026, 8, 5)}
          location = "Mumbai"
          title = "Laptop"
          price="500"
        />

        <Footer />
      </section>
    </>
  )
}

export default App
