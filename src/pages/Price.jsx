import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Price() {
  const apiKey = "D8544F59-2507-495B-BBB8-71B9CD4AAB99";
  const { symbol } = useParams();
  const url = `https://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(setCoin)
      .catch(console.error);
  }, [url]);

  if (!coin || !coin.rate) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>
        {coin.asset_id_base}/{coin.asset_id_quote}
      </h1>
      <h2>{coin.rate}</h2>
    </div>
  );
}
