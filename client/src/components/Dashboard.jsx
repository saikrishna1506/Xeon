/* eslint-disable react/prop-types */

import TotalBalanceBox from "./TotalBalanceBox";
import RecentTransactions from "./RecentTransactions";
import HeaderBox from "./HeaderBox";

//Static Data

const staticAccounts = [
  { id: 1, name: "Account 1", balance: 1000 },
  { id: 2, name: "Account 2", balance: 2000 },
];

const staticTransactions = [
  {
    accountId: 1,
    amount: 100,
    description: "Grocery",
    status: "success",
    category: "Subscription",
  },
  {
    accountId: 12,
    amount: 50,
    description: "Transport",
    status: "success",
    category: "Deposit",
  },
  {
    accountId: 22,
    amount: -500,
    description: "Salary",
    status: "success",
    category: "Transfer",
  },
  {
    accountId: 17,
    amount: 100,
    description: "Grocery",
    status: "success",
    category: "Food",
  },
  {
    accountId: 18,
    amount: 50,
    description: "Transport",
    status: "success",
    category: "Deposit",
  },
  {
    accountId: 29,
    amount: -500,
    description: "Salary",
    status: "success",
    category: "Travel",
  },
];

const staticAppwriteItemId = "item123";
const staticPage = 1;
const Dashboard = ({ type, title, subtext, user }) => {
  return (
    //Removed this bcoz main width is effected.
    //flex flex-row gap-6 relative
    // <section className="flex flex-row gap-6 relative home-content">
    <section className="home">
      <div className="home-content">
        {/* <header className="flex flex-col "> */}
        <header className="home-header">
          <header className="header-box">
            <HeaderBox
              title={title}
              type={type}
              subtext={subtext}
              user={user}
            />

            <TotalBalanceBox
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={1250.35}
            />
          </header>
        </header>
        <RecentTransactions
          accounts={staticAccounts}
          transactions={staticTransactions}
          appwriteItemId={staticAppwriteItemId}
          page={staticPage}
        />
      </div>
    </section>
  );
};

export default Dashboard;
