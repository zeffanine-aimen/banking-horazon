import AnimatedCounter from "./AnimatedCounter";
import DoughnutChart from "./DougnutChart";

const TotalBalanceBox: React.FC<TotlaBalanceBoxProps> = ({ accounts, totalBanks, totalCurrentBalance }) => {
    return (
      <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
        <div className="w-1/3">
          <DoughnutChart accounts={accounts} />
        </div>
        <div className="w-2/3 pl-4">
          <h3 className="text-lg font-semibold">{totalBanks} Bank Accounts</h3>
          <p className="text-sm text-gray-500">Total Current Balance</p>
          <div className="text-2xl font-bold">
            <AnimatedCounter amount={totalCurrentBalance} />
          </div>
        </div>
        <div className="ml-auto text-blue-500">
          <button className="text-sm font-semibold">+ Add bank</button>
        </div>
      </div>
    );
  };
  
  export default TotalBalanceBox;