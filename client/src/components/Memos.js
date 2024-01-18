import { useState, useEffect } from "react";
const Memos = ({ state }) => {
  const [memos, setMemos] = useState([]);
  const { contract } = state;

  useEffect(() => {
    const memosMessage = async () => {
      const memos = await contract.getMemos();
      setMemos(memos);
    };
    memosMessage();
  }, [contract]);

  return (

    <>
      <div>
        <div>
          <h2 className="text-center">Transaction History</h2>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Message</th>
                  <th>From</th>
                  <th>Timestamp</th>
                </tr>
              </thead>
              <tbody>
                {memos.map(transaction => (
                  <tr key={new Date(transaction.timestamp * 1000)}>
                    <td>{transaction.name}</td>
                    <td>{transaction.message}</td>
                    <td>{transaction.from}</td>
                    <td>{new Date(transaction.timestamp * 1000).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <style>{`

.table-container {
overflow-x: auto;
}

table {
width: 100%;
border-collapse: collapse;
margin-top: 20px;
}

th, td {
padding: 10px;
text-align: center;
border-bottom: 1px solid #ddd;
}

/* Add media queries for responsiveness */
@media (max-width: 600px) {
th, td {
  font-size: 14px;
}
}
`}</style>
    </>
  );
};
export default Memos;
