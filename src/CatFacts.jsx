import { useEffect, useState } from "react";
function CatFacts() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://catfact.ninja/facts?limit=5")
      .then((res) => res.json())
      .then((res) => setData(res.data))
      .then(setIsLoading(false))
      .catch((err) => setError(err));
  }, []);

  console.log(data);
  console.table(error);
  return (
    <>
      <h1>Cat facts</h1>
      {error.message && <p>{error.message}</p>}
      {isLoading && !error.message ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((data, index) => (
            <li key={index}>{data.fact}</li>
          ))}
        </ul>
      )}
    </>
  );
}
export default CatFacts;
