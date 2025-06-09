import { useFavorites } from "../../context/FavoriteContext";
import CountryCard from "../../components/CountryCard";

function Favoritos() {
  const { favorites } = useFavorites();

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Meus Favoritos</h1>
      {favorites.length === 0 ? (
        <p>Nenhum país favoritado ainda.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {favorites.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favoritos;

