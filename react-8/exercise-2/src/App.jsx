import React from "react";
import "./App.css";

class App extends React.Component {
  // members is ARRAY containing OBJECT.
  members = [
    {
      name: "Mock J",
      age: 99,
      weight: 66,
      running: 40,
      status: "Balance",
    },
    {
      name: "P'Mean",
      age: 18,
      weight: 32,
      running: 80,
      status: "Extreme",
    },
    {
      name: "President Joe",
      age: 15,
      weight: 45,
      running: 10,
      status: "Good",
    },
    {
      name: "Mock J",
      age: 99,
      weight: 66,
      running: 40,
      status: "Balance",
    },
    {
      name: "P'Mean",
      age: 18,
      weight: 32,
      running: 80,
      status: "Extreme",
    },
    {
      name: "President Joe",
      age: 15,
      weight: 45,
      running: 10,
      status: "Good",
    },
  ];

  render() {
    return (
      <div id="app">
        <h1>Enter Data</h1>
        <RunningForm />
        <TableDisplay memberData={members} />
      </div>
    );
  }
}

class RunningForm extends React.Component {
  // code here
}

// class of TableDisplay here

export default App;
