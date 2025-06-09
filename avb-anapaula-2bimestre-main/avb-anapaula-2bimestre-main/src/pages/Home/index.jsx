import { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";

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
          <CountryCard key={country.cca3} country={country} />
        ))}
      </ul>
    </div>
  );
}

export default Home;
