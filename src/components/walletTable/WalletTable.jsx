/* eslint-disable react/prop-types */
import "./walletTable.scss";

export default function WalletTable(props) {
  let total = 0;
  props.data.forEach((item) => {
    total += item.balance;
  });
  props.data.map((coin) => {
    coin.portfolio = parseFloat((coin.balance / total) * 100).toFixed(2);
  });
  console.log(props.data);
  return (
    <div className="walletTable">
      <div className="totalStatistic">
        <h3>Portfolio value</h3>
        <h1>$ {total.toLocaleString()}</h1>
        <p className="up">+$1201.47 (+3.8%)</p>
      </div>

      <table className="table">
        <tr>
          <th>Token</th>
          <th>Amount</th>
          <th>Portfolio %</th>
          <th>Price(24h)</th>
          <th>Balance</th>
        </tr>
        {props.data.map((coin) => (
          <tr key={coin.id}>
            <td>{coin.name}</td>
            <td>{coin.amount}</td>
            <td>{coin.portfolio}%</td>
            <td>{coin.price}</td>
            <td>{coin.balance}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
