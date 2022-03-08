import React from 'react';
import Home from './components/Home';
import Produits from './components/Produits';
import Produit from './components/Produit';
import { Routes, Route, Link} from "react-router-dom";
import './App.css' 

class App extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(<>
    <div className='homeBar'>
      <h1>Exercice routeur</h1>
      <nav className='navBar'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/produits'>Produits</Link></li>
        </ul>
      </nav>
    </div>
    
    {/* <Produits /> */}
          <Routes> 
            <Route exact path="/" element={<Home/>}/>
						<Route path="/produits" element={<Produits/>}/>
						<Route path="/produit/:productId" element={<Produit/>}/>
          </Routes>
    </>)
  }
}

export default App