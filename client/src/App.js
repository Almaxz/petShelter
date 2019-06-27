import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import List from './Components/List';
import New from './Components/New';
import Detail from './Components/Detail';
import Edit from './Components/Edit';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <fieldset style={{ color: "white", backgroundColor: "blueviolet", marginBottom: "1%" }}>
          <legend align="center" style={{ backgroundColor: "blueviolet", borderRadius: "50%", padding: "0.5em"}} >
            <h1>Friends of Homeless Animals</h1>
          </legend>
          <div style={{ display:"flex", justifyContent: "center", fontSize: "1.5rem"}}>
            <Link to="/" style={{ color: "white" }}>Home</Link> &nbsp;
            <Link to="/new" style={{ color: "white" }}>Add a Pet to the shelter</Link>
          </div>
        </fieldset>
        <div>
          <Route path="/new" component={New} />
          <Route exact path="/" component={List} />
          <Route path="/edit/:_id" component={Edit} />
          <Route path="/pets/:_id" component={Detail} /> 
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
