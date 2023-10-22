import './App.css'
import { CenteredText } from './components/CenteredText'
import { Inicio } from './components/Inicio'
import { Navbar } from './components/Navbar'
import { Proyects }  from './components/Proyects'
import { Tecnolog } from './components/Tecnolog.jsx'


function App() {

  return (
    <>
      <header >
        <Navbar/>
        <Inicio/>
        <CenteredText/>
        <Tecnolog/>
        <Proyects/>
      </header>
     
    </>
  )
}

export default App
