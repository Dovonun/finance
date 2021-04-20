import logo from "./logo.svg";
import { useState } from "react";
import BudgetCategories from "./components/BudgetCategories";
import "./App.css";

function App() {
  const [budgetCategories, setBudgetCategories] = useState([
    { Name: "", Budget: "" },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <BudgetCategories
          budgetCategories={budgetCategories}
          onChange={(input, index, property) => {
            const newState = [...budgetCategories];
            newState[index][property] = input;

            if (newState[newState.length - 1].Name)
              newState.push({ Name: "", Budget: 0 });

            setBudgetCategories(newState);
          }}
          remove={(i) =>
            setBudgetCategories(
              [...budgetCategories].filter((category, index) => index !== i)
            )
          }
        />
      </header>
    </div>
  );
}

export default App;
