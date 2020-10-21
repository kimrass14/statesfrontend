import React from 'react';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
// import Display from "./Display";
// import Form from "./Form";

function App() {

  const url = "https://statesbackend.herokuapp.com"

  const [states, setStates] = React.useState([])

  const emptyState = {
    state: "",
    img: ""
  }

  // const [selectedState, setSelectedState] = React.useState(emptyState)

  const getStates = () => {
    fetch(url + "/state/")
    .then(response => response.json())
    .then(data => {
      setStates(data)
    })
  }
  React.useEffect(() => {
    getStates()
  }, [])


  return (
    <div className="App">
      <h1>States and Capitals</h1>
      <hr />
      <Link to="/creat">
        <button>Add State</button>
        <button>Add Capital</button>
      </Link>
      <main>
        <Switch>
          <Route exact path="/" render={(rp) =>
            <Display {...rp} states={states} selectState={selectState} deleteState={deleteState}/>}/>
          

        </Switch>
      </main>
      
    </div>
  );
}

export default App;
