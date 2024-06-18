
import React from 'react';
import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';

const Home = () => {
  const loggedIn = { firstName: 'Aimen', lastName: 'Zeff', name: 'Aimen Zeff', email: 'aimen@zeff.com', avatar: 'path/to/avatar.jpg' };
  const banks = [
    { id: 1, name: "Chase Bank" },
    { id: 2, name: "Bank of America" }
  ];
  const transactions = [
    { id: 1, category: 'Subscriptions', amountLeft: 25 },
    { id: 2, category: 'Food and booze', amountLeft: 120 },
    { id: 3, category: 'Savings', amountLeft: 50 }
  ];

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently"
          />
          <TotalBalanceBox
            accounts={[
              // { id: 1, name: "Bank A", balance: 1349.06 },
              // { id: 2, name: "Bank B", balance: 1349.06 }
            ]}
            totalBanks={2}
            totalCurrentBalance={2698.12}
          />
        </header>
      </div>
        <RightSidebar 
          user={loggedIn}
          transactions={transactions}
          banks={banks}
        />
    </section>
  );
};

export default Home;
