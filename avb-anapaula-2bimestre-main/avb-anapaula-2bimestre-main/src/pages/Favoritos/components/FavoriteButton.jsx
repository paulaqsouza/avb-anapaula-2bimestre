// src/components/FavoriteButton.jsx
function FavoriteButton({ isFavorite, onClick }) {
    return (
      <button
        onClick={onClick}
        className={`text-sm ${
          isFavorite ? "text-red-500" : "text-gray-500"
        } hover:underline`}
      >
        {isFavorite ? "Remover" : "Favoritar"}
      </button>
    );
  }
  
  export default FavoriteButton;
  