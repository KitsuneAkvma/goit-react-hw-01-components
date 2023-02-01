import PropTypes from 'prop-types';

import transactionsCSS from './transactions.module.css';

function selectPaymentColor(type) {
  switch (type) {
    case 'Invoice':
      return { backgroundColor: '#7dbfcf' };
    case 'Payment':
      return { backgroundColor: '#cf7d7d' };
    case 'Withdrawal':
      return { backgroundColor: '#cf7d7d' };
    case 'Deposit':
      return { backgroundColor: '#80cf7d' };
    default:
      return { backgroundColor: '#f6fefe' };
  }
}
const TransactionHistory = ({ items }) => {
  return (
    <table className={transactionsCSS.transactionHitory}>
      <thead className={transactionsCSS.tableHeader}>
        <tr className={transactionsCSS.tableRow}>
          <th className={transactionsCSS.tableHeadCell}>Type</th>
          <th className={transactionsCSS.tableHeadCell}>Amount</th>
          <th className={transactionsCSS.tableHeadCell}>Currency</th>
        </tr>
      </thead>

      <tbody className={transactionsCSS.tableBody}>
        {items.map(item => (
          <tr
            className={transactionsCSS.tableRow}
            key={item.id}
            style={selectPaymentColor(item.type)}
          >
            <td className={transactionsCSS.tableCell}>
              {
                (item.type =
                  item.type[0].toUpperCase() + item.type.substring(1)) // Capitalization
              }
            </td>
            <td className={transactionsCSS.tableCell}>{item.amount}</td>
            <td className={transactionsCSS.tableCell}>
              {item.currency.slice(0, 3)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;
