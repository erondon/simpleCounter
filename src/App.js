import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = (props) =>{
  return (
<div className="container">
  <div className="row">

    <div className="col-sm digits text-center">
    <i class="fa fa-clock-o" aria-hidden="true"></i>{props.digits}
    </div>
  </div>
</div>
  );
}

export default App;
