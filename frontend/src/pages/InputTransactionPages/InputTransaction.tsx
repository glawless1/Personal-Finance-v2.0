import MainPageButton from "../../components/MainPageButton";
import { Outlet } from "react-router-dom";
function InputTransaction() {
  return <div className="min-h-screen flex flex-col items-center justify-center bg-blue-400 text-black">
    <MainPageButton displayText="Read Receipt" routeText="/read-receipt" />
    <MainPageButton displayText="Input Single Transaction" routeText="/single-transaction" />
    <MainPageButton displayText="Upload Multiple Transactions" routeText="/multiple-transactions" />
    <Outlet />
    </div>;
}

export default InputTransaction;