import BankCard from "./BankCard";


const RightSidebar: React.FC<RightSidebarProps> = ({ user, transactions, banks }) => {
  return (
    <aside className="right-sidebar">
      <div className="profile-banner" />
      <div className="profile">
        <div className="profile-img">
          <span className="text-5xl font-bold text-blue-500">{user.firstName[0]}</span>
        </div>
        <div className="profile-details">
          <div className="profile-name">{user.firstName} {user.lastName}</div>
          <div className="profile-email">{user.email}</div>
        </div>
      </div>
      <div className="banks">
        <h2 className="text-lg font-semibold">My Banks</h2>
        <div className="relative flex flex-1 flex-col items-center justify-center gap-5">
          <div className="relative z-10">
            <BankCard account={banks[0]} userName={`${user.firstName} ${user.lastName}`} showBalance={true} />
          </div>
          {banks[1] && (
            <div className="absolute right-0 top-8 z-0 w-[90%]">
              <BankCard account={banks[1]} userName={`${user.firstName} ${user.lastName}`} showBalance={true} />
            </div>
          )}
        </div>
      </div>
      {/* <div className="transactions">
        <h2 className="text-lg font-semibold">My Budgets</h2>
        {transactions.map((transaction) => (
          <div key={transaction.id} className="transaction-card">
            <span>{transaction.category}</span>
            <span>${transaction.amount} left</span>
          </div>
        ))}
      </div> */}
    </aside>
  );
};


export default RightSidebar;