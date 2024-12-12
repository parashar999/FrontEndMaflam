// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import styles from './TransationReciept.module.css';
// import axios from 'axios';
// import auth from '../../Auth/Auth';

// const TransationReciept = () => {
//   const [transactions, setTransactions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);

//   const rowsPerPage = 8;
//   const navigate = useNavigate();

//   const userDetails = auth.getAuthData();
//   const token = userDetails?.token;

//   // Fetch transaction data
//   const fetchTransactionData = async () => {
//     try {
//       const response = await axios.get(
//         'https://backend.maflam.com/maflam/get-user-transction-details',
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setTransactions(response.data || []);
//       console.log("transaction" , response.data)
//     } catch (err) {
//       setError('Error fetching transaction data');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch data on component mount
//   useEffect(() => {
//     fetchTransactionData();
//   }, []);

//   // Handle search query
//   const handleSearch = (e) => setSearchQuery(e.target.value);

//   // Filter transactions based on the search query
//   const filteredTransactions = transactions.filter((transaction) =>
//     transaction?.tranRef?.toLowerCase().includes(searchQuery.toLowerCase() )
//   ||
//   transaction?.cartAmount?.toLowerCase().includes(searchQuery.toLowerCase() )
//   ||
//   transaction?.cartId?.nameInEng?.toLowerCase().includes(searchQuery.toLowerCase() )
//   ||
//   transaction?.paymentResult?.transactionTime?.toLowerCase().includes(searchQuery.toLowerCase() )
//   );

//   console.log("fgvhbj" ,filteredTransactions )
//   // Paginate filtered transactions
//   const paginatedTransactions = filteredTransactions.slice(
//     (currentPage - 1) * rowsPerPage,
//     currentPage * rowsPerPage
//   );

//   const totalPages = Math.ceil(filteredTransactions.length / rowsPerPage);

//   return (
//     <div className={styles.usertablecontainer}>
//         <header className={styles.profileHeader}>
//         <h1>My Transactions</h1>
//       </header>
//       <nav>
//         <ul className={styles.profileTabs}>
//           <li >
//             <Link to="/personalInformation">Personal Information</Link>
//           </li>
//           <li className={styles.activeTab}>
//             <Link  to="/transaction">My Transactions</Link>
//           </li>
//           {/* <li>
//             <Link to="/mycertificate">My Certificates</Link>
//           </li>
//           <li>
//             <Link to="/mywishlist">My Wishlist</Link>
//           </li> */}
//         </ul>
//         <hr className={styles.footerHr} />
//       </nav>
//       <div className={styles.Breacktable}>
//         <div>
//           <h1 className={styles.Heading}></h1>
//           <input
//             type="text"
//             placeholder="Search with Name Of course / Transaction Id / Time..."
//             value={searchQuery}
//             onChange={handleSearch}
//             className={styles.searchinput}
//           />
//         </div>

//         {/* Show loading or error state */}
//         {loading ? (
//           <p>Loading...</p>
//         ) : error ? (
//           <p className={styles.error}>{error}</p>
//         ) : (
//           <>
//             <table className={styles.responsivetable}>
//               <thead className={styles.colorsfield}>
//                 <tr>
//                   <th>Index</th>
//                   <th> Course Name</th>
//                   <th>Transaction ID</th>
//                   <th>Amount</th>
                 
//                   <th>Currency</th>
//                   <th>Status</th>
             
//                   <th> Transaction Date</th>
//                   <th> Dounload recipt</th> 
//                   {/* <th> Download Invoice </th> */}
                 
                
//                 </tr>
//               </thead>
//               <tbody>
//                 {paginatedTransactions.map((transaction, index) => (
//                   <tr key={transaction._id}>
//                     <td>{(currentPage - 1) * rowsPerPage + index + 1}</td>
//                     <td>{transaction?.cartId?.nameInEng || 'N/A'}</td>
//                     <td>{transaction?.tranRef || 'N/A'}</td>
//                     <td>{transaction?.cartAmount || 'N/A'}</td>
//                     <td>{transaction?.cartCurrency|| 'N/A'}</td>

//                     <td>{transaction?.paymentResult?.responseMessage || 'N/A'}</td>
                   
                    
                    
                   
//                     <td>{transaction?.paymentResult?.transactionTime || 'N/A'}</td>
//                     <td>{transaction?.paymentResult?.transactionTime || 'N/A'}</td>
                
//                   </tr>
//                 ))}
//               </tbody>
//             </table>

//             {/* Pagination */}
//             <div className={styles.pagination}>
//               <button
//                 className={styles.pagebtn}
//                 onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//                 disabled={currentPage === 1}
//               >
//                 Previous
//               </button>
//               <span>{`${currentPage} / ${totalPages}`}</span>
//               <button
//                 className={styles.pagebtn}
//                 onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//                 disabled={currentPage === totalPages}
//               >
//                 Next
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TransationReciept;


import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './TransationReciept.module.css';
import axios from 'axios';
import { jsPDF } from 'jspdf';
import auth from '../../Auth/Auth';

const TransationReciept = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 8;
  const navigate = useNavigate();

  const userDetails = auth.getAuthData();
  const token = userDetails?.token;

  // Fetch transaction data
  const fetchTransactionData = async () => {
    try {
      const response = await axios.get(
        'https://backend.maflam.com/maflam/get-user-transction-details',
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setTransactions(response.data || []);
      console.log("transaction" , response.data)
    } catch (err) {
      setError('Error fetching transaction data');
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchTransactionData();
  }, []);

  // Handle search query
  const handleSearch = (e) => setSearchQuery(e.target.value);

  // Filter transactions based on the search query
  const filteredTransactions = transactions.filter((transaction) =>
    transaction?.tranRef?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    transaction?.cartAmount?.toString().toLowerCase().includes(searchQuery.toLowerCase()) ||
    transaction?.cartId?.nameInEng?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    transaction?.paymentResult?.transactionTime?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Paginate filtered transactions
  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const totalPages = Math.ceil(filteredTransactions.length / rowsPerPage);

  // Generate and download receipt as PDF
  const handleDownloadReceipt = (transaction) => {
    const doc = new jsPDF();

    // Title
    doc.setFontSize(18);
    doc.text('Tax Invoice', 105, 20, null, null, 'center');

    // Transaction Details
    doc.setFontSize(12);
    const details = [
      `Transaction ID: ${transaction.tranRef || 'N/A'}`,
      `Course Name: ${transaction.cartId?.nameInEng || 'N/A'}`,
      `Amount: ${transaction.cartAmount || 'N/A'}`,
      `Currency: ${transaction.cartCurrency || 'N/A'}`,
      `Customer Number : ${transaction?.customerDetails?.name || 'N/A'}`,
        `Customer Email: ${transaction?.customerDetails?.email || 'N/A'}`,
        `Customer City: ${transaction?.customerDetails?.street1|| 'N/A'}`,
      `Status: ${transaction.paymentResult?.responseMessage || 'N/A'}`,
      `merchantId: ${transaction?.merchantId || 'N/A'}`,
      `Transaction Date: ${transaction.paymentResult?.transactionTime || 'N/A'}`,
        
     
        
    ];  
    details.forEach((detail, index) => {
      doc.text(detail, 20, 40 + index * 10);
    });

    // Footer
    doc.setFontSize(15);
    doc.text('Thank you for your transaction!', 105, 220, null, null, 'center');

    // Save the PDF
    doc.save(`Transaction_Receipt_${transaction.tranRef || 'Unknown'}.pdf`);
  };

  return (
    <div className={styles.usertablecontainer}>
      <header className={styles.profileHeader}>
        <h1>My Transactions</h1>
      </header>
      <nav>
        <ul className={styles.profileTabs}>
          <li>
            <Link to="/personalInformation">Personal Information</Link>
          </li>
          <li className={styles.activeTab}>
            <Link to="/transaction">My Transactions</Link>
          </li>
        </ul>
        <hr className={styles.footerHr} />
      </nav>
      <div className={styles.Breacktable}>
        <div>
          <input
            type="text"
            placeholder="Search with Name Of course / Transaction Id / Time..."
            value={searchQuery}
            onChange={handleSearch}
            className={styles.searchinput}
          />
        </div>

        {/* Show loading or error state */}
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className={styles.error}>{error}</p>
        ) : (
          <>
            <table className={styles.responsivetable}>
              <thead className={styles.colorsfield}>
                <tr>
                  <th>Index</th>
                  <th>Course Name</th>
                  <th>Transaction ID</th>
                  <th>Amount</th>
                  <th>Currency</th>
                  <th>Status</th>
                  <th>Transaction Date</th>
                  <th>Download Tax Invoice</th>
                </tr>
              </thead>
              <tbody>
                {paginatedTransactions.map((transaction, index) => (
                  <tr key={transaction._id}>
                    <td>{(currentPage - 1) * rowsPerPage + index + 1}</td>
                    <td>{transaction?.cartId?.nameInEng || 'N/A'}</td>
                    <td>{transaction?.tranRef || 'N/A'}</td>
                    <td>{transaction?.cartAmount || 'N/A'}</td>
                    <td>{transaction?.cartCurrency || 'N/A'}</td>
                    <td>{transaction?.paymentResult?.responseMessage || 'N/A'}</td>
                    <td>{transaction?.paymentResult?.transactionTime || 'N/A'}</td>
                    <td>
                      <button
                        className={styles.downloadBtn}
                        onClick={() => handleDownloadReceipt(transaction)}
                      >
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className={styles.pagination}>
              <button
                className={styles.pagebtn}
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span>{`${currentPage} / ${totalPages}`}</span>
              <button
                className={styles.pagebtn}
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TransationReciept;
