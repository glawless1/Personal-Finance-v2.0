import { useNavigate } from "react-router-dom";

function MainPageButton(
    { displayText, routeText }: { displayText: string; routeText: string },
) {
    const navigate = useNavigate();

    return (
        <button
            className="w-64 h-60 rounded-4xl bg-blue-300 text-black text-2xl font-medium shadow-md hover:bg-blue-400 transition"
            onClick={() => navigate(routeText)}
        >
            {displayText}
        </button>
    );
}

export default MainPageButton;