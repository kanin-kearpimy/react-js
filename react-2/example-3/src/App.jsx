import Button from "./components/Button";
import "./App.css";

function App() {
  const welcome = () => {
    alert("Welcome to website");
  };

  const handleChange = (value) => {
    console.log(value);
  };

  return (
    <div id="app">
      <input type="text" onChange={(e) => handleChange(e.target.value)} />
      <button onClick={welcome}>Welcome</button>
    </div>
  );
}

export default App;
