import MainPageButton from "../components/MainPageButton";

function MainPage() {
  return (
    <div className="min-h-screen flex flex-row items-center gap-8 justify-center bg-blue-800 text-black">
        <MainPageButton displayText={"Input Transaction"} routeText={"/input-transaction"} />
        <MainPageButton displayText={"View Spending"} routeText={"/view-spending"} />
    </div>
  )
}

export default MainPage;