import React from "react";
import AnimatedCounter from "./AnimatedCounter";
import DoughnutChart from "./DoughnutChart";
import BankCard from "./BankCard";

const TotalBalanceBox = ({ account,len,all, user, isActive }) => {
 /*  const cards = accounts.map((account) => {
    const amount = account.amount !== undefined ? parseFloat(account.amount) : 0;
    return {
      bankName: account.bankName || "Unknown Bank",
      cardHolder: account.cardHolder || user,
      cardNumber: account.cardNumber || "**** **** **** ****",
      spending: `$${amount.toFixed(2)}`,
    };
  });
 */
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        <DoughnutChart account={all} />
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="header-2">Bank Accounts: {len}</h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Total Current Balance</p>
          <div className="total-balance-amount flex-center gap-2">
          {isActive && <AnimatedCounter amount={account.balances?.current} />}
          </div>
        </div>
      </div>

      <div>
          <BankCard account={account} userName={user} />
      </div>
    </section>
  );
};

export default TotalBalanceBox;
