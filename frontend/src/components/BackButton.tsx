import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();

  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => navigate(-1)}>
      Back
    </button>
  );
}

export default BackButton;
