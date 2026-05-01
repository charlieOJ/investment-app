import { formatter } from "../util/investments";

const Results = ({ results }) => {
  const resultTable = () => {
    if (!results || results.length === 0) return [];

    const initialInvestment =
      results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;

    return results.map(yearRow => {
      const totalInterest =
        yearRow.valueEndOfYear - yearRow.annualInvestment * yearRow.year - initialInvestment;
      return (
        <tr key={yearRow.year}>
          <td>{yearRow.year}</td>
          <td>{formatter.format(yearRow.interest)}</td>
          <td>{formatter.format(yearRow.valueEndOfYear)}</td>
          <td>{formatter.format(totalInterest)}</td>
          <td>{formatter.format(yearRow.annualInvestment)}</td>
        </tr>
      );
    });
  };

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment value</th>
          <th>Interest (year)</th>
          <th>Total Interest</th>
          <th>Invested capital</th>
        </tr>
      </thead>
      <tbody>{resultTable()}</tbody>
    </table>
  );
};

export default Results;
