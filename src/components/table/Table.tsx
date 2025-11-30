import { formatter } from "../../util/investment";

interface AnnualData {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
}
interface TableProps {
  annualData: AnnualData[];
}
export const Table = (props: TableProps) => {
  const { annualData } = props;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investement Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map((data) => (
          <tr key={data.year}>
            <td>{data.year}</td>
            <td>{formatter.format(data.valueEndOfYear)}</td>
            <td>{formatter.format(data.interest)}</td>
            <td>{formatter.format(data.annualInvestment * data.year)}</td>
            <td>
              {formatter.format(
                data.valueEndOfYear - data.annualInvestment * data.year
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
