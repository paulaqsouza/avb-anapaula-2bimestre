import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoriteContext";
import FavoriteButton from "./FavoriteButton";

function CountryCard({ country }) {
  const { favorites, toggleFavorite } = useFavorites();

  const isFavorite = favorites.some((fav) => fav.cca3 === country.cca3);

  return (
    <li className="border rounded p-4 bg-white shadow hover:shadow-lg transition">
      <img
        src={country.flags.png}
        alt={`Bandeira de ${country.name.common}`}
        className="w-20 h-14 object-cover mb-2"
      />
      <h2 className="font-semibold text-lg">{country.name.common}</h2>
      <p>Capital: {country.capital ? country.capital[0] : "Sem capital"}</p>

      <Link
        to={`/detalhes/${country.cca3}`}
        className="block mt-2 text-blue-600 hover:underline"
      >
        Ver detalhes
      </Link>

      <FavoriteButton
        isFavorite={isFavorite}
        onClick={() => toggleFavorite(country)}
      />
    </li>
  );
}

export default CountryCard;

