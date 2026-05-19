
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import ExpenseItem from './components/ExpenseItem'
import Expenses from './components/Expenses';
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
        <Expenses></Expenses>
        </div>

        <Footer />
      </section>
    </>
  );
}

export default App
