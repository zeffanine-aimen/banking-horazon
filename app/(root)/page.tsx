import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {

  const loggedIn = { firstName: 'Aimen', lastName: 'Zeff' };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Geust'}
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
    </section>
  );
};

export default Home;
