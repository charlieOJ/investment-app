import { useState } from "react";
import Header from "./components/Header.react";
import Form from "./components/Form.react";
import "./App.css";

function App() {
  const [inputValues, setInputValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

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
    </div>
  );
}

export default App;
