import React from 'react';
import {render} from 'react-dom';
import Login from './screens/Login';


const App = () => {
  return (
    <div style={{width:"100%", height:"100vh"}}>
      <Login/>
    </div>
  )
}

render(<App/>, document.getElementById('root'));