import React from "react";
import "./App.css";

function App() {
  return (
    <div id="app">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    // Code for Header
    // <Header />
    <header>
      <span>Turn on / off</span>
      <p>Current Temperature: XXX</p>
    </header>
  );
}

function Content() {
  return (
    // Code for Content
    // <Content />
    <div>
      <Temperature />
    </div>
  );
}

function Temperature() {
  const temperature = 30;
  return (
    // Code for Temperature
    // <Temperature />
    <div id="temperature">
      <span>{temperature} Oc</span>
    </div>
  );
}

function Footer() {
  return (
    // Code for Footer
    // <Footer />
    <footer>
      <button>Up</button>
      <button>Down</button>
    </footer>
  );
}

export default App;
