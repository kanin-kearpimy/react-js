import { createContext, useContext, useState } from "react";
import "./App.css";

const CustomContext = createContext({});

function App() {
  const [temperature, setTemperature] = useState(0);
  return (
    <div id="app">
      <CustomContext.Provider
        value={{
          temperature: temperature,
          setTemperature: setTemperature,
        }}
      >
        <Header />
        <Content />
        <Footer />
      </CustomContext.Provider>
    </div>
  );
}

function Header() {
  const context = useContext(CustomContext);
  return (
    // Code for Header
    // <Header />
    <header>
      <span>Turn on / off</span>
      <p>Current Temperature: {context.temperature}</p>
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
  const context = useContext(CustomContext);
  return (
    // Code for Temperature
    // <Temperature />
    <div id="temperature">
      <span>{context.temperature} Oc</span>
    </div>
  );
}

function Footer() {
  const context = useContext(CustomContext);
  return (
    // Code for Footer
    // <Footer />
    <footer>
      <button onClick={() => context.setTemperature((prev) => prev + 1)}>
        Up
      </button>
      <button onClick={() => context.setTemperature((prev) => prev - 1)}>
        Down
      </button>
    </footer>
  );
}

export default App;
