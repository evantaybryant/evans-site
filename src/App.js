import logo from "./logo.svg";
import "./App.css";

import CustomForm from "./components/custom-form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Evan's Site</h1>
        <p>Hi, my name is Evan - I'm learning how to code!!</p>

        <CustomForm />
      </header>
    </div>
  );
}

export default App;
