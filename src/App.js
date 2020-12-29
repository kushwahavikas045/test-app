import React from 'react'
import Usertable from './components/Usertable';
import Userform from './components/Userform';
import './App.css';
import Header from './components/Header';

import { BrowserRouter , Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Route exact path='/' component={Usertable} />
      <Route path='/userform' component={Userform} />
     
      </BrowserRouter>
      
     

    </div>
  );
}

export default App;
