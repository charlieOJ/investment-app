import { useState, useEffect } from "react";
import Header from "./components/Header.react";
import Form from "./components/Form.react";
import Results from "./components/Results.react";
import { calculateInvestmentResults } from "./util/investments";
import "./App.css";

function App() {
  const [inputValues, setInputValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const [results, setResults] = useState([]);

  useEffect(() => {
    updateResults(inputValues);
  }, [inputValues]);

  const updateResults = inputValues => {
    const newResults = calculateInvestmentResults({
      initialInvestment: inputValues["initialInvestment"],
      annualInvestment: inputValues["annualInvestment"],
      expectedReturn: inputValues["expectedReturn"],
      duration: inputValues["duration"],
    });

    setResults(newResults);
  };

  const onChangeValue = (inputValuesUpdated, value) => {
    setInputValues(prevInputValues => {
      const currentInputValues = { ...prevInputValues };
      currentInputValues[inputValuesUpdated] = +value;
      return currentInputValues;
    });
  };

  return (
    <div>
      <Header />
      <Form inputValues={inputValues} onChangeValue={onChangeValue} />
      <Results results={results} />
    </div>
  );
}

export default App;
