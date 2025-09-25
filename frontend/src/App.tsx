import "./index.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";

import InputTransaction from "./pages/InputTransactionPages/InputTransaction";
import ReadReceipt from "./pages/InputTransactionPages/ReadReceipt";
import SingleTransaction from "./pages/InputTransactionPages/SingleTransaction";
import MultipleTransactions from "./pages/InputTransactionPages/MultipleTransactions";

import ViewSpending from "./pages/ViewSpending";


function App() {
  return (  
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/input-transaction" element={<InputTransaction />} />
          <Route path="/read-receipt" element={<ReadReceipt />} />
          <Route path="/single-transaction" element={<SingleTransaction />} />
          <Route path="/multiple-transactions" element={<MultipleTransactions />} />
          <Route path="/view-spending" element={<ViewSpending />} />
        </Routes>
  );
}

export default App;

