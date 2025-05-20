import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'

function Detalhes() {
  const { id } = useParams();
  const [pais, setPais] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPais(data[0]);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Carregando detalhes...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">{pais.name.common}</h1>
      <img
        src={pais.flags.png}
        alt={`Bandeira de ${pais.name.common}`}
        className="w-32 h-20 object-cover mb-4"
      />
      <p>Capital: {pais.capital}</p>
      <p>População: {pais.population.toLocaleString()}</p>
      <p>Região: {pais.region}</p>
      <p>Sub-região: {pais.subregion}</p>
    </div>
  );
}

export default Detalhes;

