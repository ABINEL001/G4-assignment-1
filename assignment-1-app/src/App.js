import React from 'react';
import './App.css';
import Form from './component/Form';
import {pic, title, description} from './component/Card';

function App() {
  return (
    <div className="App">
      <Form/>
      <h1>{title}</h1>
      <div>
      <img src= {pic} alt='analytic'/>
      </div>
      
      <div>{description}</div>

    </div>
  );
}

export default App;
