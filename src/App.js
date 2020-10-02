import React from 'react';
import routes from './routes'
import Navbar from '../src/Components/Nav/Navbar'
import './App.scss'
//isLoggedin show them nav/routes, otherwise show them landing component
function App() {
  return (
    <div className='app-class'>
      <Navbar />
      {routes}
    </div>
  );
}

export default App;
