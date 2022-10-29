import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

import Basket from './components/Basket';
import "./components/all.css";
//import product from './components/product'
function App() {
  return (
    <div className="App">
   <Header className="header"></Header>
   <div>
     <Basket></Basket>
    </div>
     {/* <h1 >TOTAL:</h1> */}
  </div>


  );
}

export default App;
