import { useState } from "react";
import { Header } from "./components/header/Header";
import { InvestemnetInput } from "./components/input-grid/InvestemnetInput";
import {
  calculateInvestmentResults,
  type CalculateInvestmentResults,
} from "./util/investment";
import { Table } from "./components/table/Table";

function App() {
  const [inputValues, setInputValues] = useState<CalculateInvestmentResults>({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });

  const initialDurationCheck = inputValues.duration >= "1";
  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value, // <-- keep as string so backspace works
    }));
  };
  const annualData = calculateInvestmentResults(inputValues);
  return (
    <>
      <Header />
      <InvestemnetInput
        inputValues={inputValues}
        inputChangeHandler={inputChangeHandler}
      />
      {!initialDurationCheck && (
        <p className="center">
          Please enter a valid duration (at least 1 year) to see the investment
        </p>
      )}
      {initialDurationCheck && <Table annualData={annualData} />}
    </>
  );
}

export default App;
