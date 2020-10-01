import React from 'react';
import routes from './routes'
import Navbar from '../src/Components/Nav/Navbar'
//isLoggedin show them nav/routes, otherwise show them landing component
function App() {
  return (
    <div >
      <Navbar />
      {routes}
    </div>
  );
}

export default App;
