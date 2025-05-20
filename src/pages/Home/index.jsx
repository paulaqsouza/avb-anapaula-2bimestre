import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar países:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando países...</p>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Lista de Países</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {countries.map((country) => (
          <li
            key={country.cca3}
            className="border rounded p-4 bg-white shadow hover:shadow-lg transition"
          >
            <img
              src={country.flags.png}
              alt={`Bandeira de ${country.name.common}`}
              className="w-20 h-14 object-cover mb-2"
            />
            <h2 className="font-semibold text-lg">{country.name.common}</h2>
            <p>Capital: {country.capital ? country.capital[0] : "Sem capital"}</p>
            <Link
              to={`/detalhes/${country.cca3}`}
              className="mt-2 inline-block text-blue-600 hover:underline"
            >
              Ver detalhes
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
