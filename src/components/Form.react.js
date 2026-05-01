import { inputsList } from "../data/inputsList";

const Form = ({ inputValues, onChangeValue }) => {
  return (
    <div className="input-group" id="user-input">
      {inputsList.map(inputItem => {
        return (
          <div key={inputItem.key}>
            <label htmlFor={inputItem.key}>
              {inputItem.label} <em>{inputItem.helper && inputItem.helper}</em>
            </label>
            <input
              value={inputValues[inputItem.key]}
              type="number"
              min={inputItem.min && inputItem.min}
              id={inputItem.key}
              onChange={e => onChangeValue(inputItem.key, e.target.value)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Form;
