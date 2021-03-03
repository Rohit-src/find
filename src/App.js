import React from 'react'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Crousel from "./components/Crousel"
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from "./components/Cards"
import Cards2 from "./components/Cards2"
import Crousel2 from "./components/Crousel2"
import Cards3 from "./components/Cards3"
import Card4 from "./components2/Card4"
import Data from "./component3/Data"
import Login from "./components/Login"

const App = () => {
  return (
    <div>
      <Header/>
      <br/>
      <Crousel/><br/>
      <Cards/>

      <Cards2/>
      <Crousel2/><br/>
      <Cards3/><br/>

      <Card4/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <Data/><br/>
      <Login/>

      <Footer/>
      
    
    </div>
  )
}

export default App
