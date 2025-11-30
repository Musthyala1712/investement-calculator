import type { CalculateInvestmentResults } from "../../util/investment";

interface InvestemnetInputProps {
  inputValues: CalculateInvestmentResults;
  inputChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InvestemnetInput = (props: InvestemnetInputProps) => {
  const { inputValues, inputChangeHandler } = props;
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            name="initialInvestment"
            value={inputValues.initialInvestment}
            onChange={inputChangeHandler}
            placeholder="e.g. 10000"
            required
          />
        </p>

        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            name="annualInvestment"
            value={inputValues.annualInvestment}
            onChange={inputChangeHandler}
            placeholder="e.g. 1200"
            required
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Expected Return (%, per year)</label>
          <input
            type="number"
            name="expectedReturn"
            value={inputValues.expectedReturn}
            onChange={inputChangeHandler}
            placeholder="e.g. 7"
            required
          />
        </p>

        <p>
          <label>Duration (years)</label>
          <input
            type="number"
            name="duration"
            value={inputValues.duration}
            onChange={inputChangeHandler}
            placeholder="e.g. 10"
            required
          />
        </p>
      </div>
    </section>
  );
};
