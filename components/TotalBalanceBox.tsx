import AnimatedCounter from "./AnimatedCounter";
import DoughnutChart from "./DougnutChart";

const TotalBalanceBox: React.FC<TotlaBalanceBoxProps> = ({ accounts, totalBanks, totalCurrentBalance }) => {
    return (
      <section className="total-balance ">
        <div className="total-balance-chart">
          <DoughnutChart accounts={accounts} />
        </div>
        <div className=" pl-2">
          <h3 className="text-md font-semibold mb-4">{totalBanks} Bank Accounts</h3>
          <p className="total-balance-label">Total Current Balance</p>
          <div className="text-xl font-bold mb-2">
            <AnimatedCounter amount={totalCurrentBalance} />
          </div>
        </div>
        {/* <div className="ml-auto text-blue-500">
          <button className="text-xs font-semibold">+ Add bank</button>
        </div> */}
      </section>
    );
  };

export default TotalBalanceBox;
