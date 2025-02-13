import { useEffect, useState } from "react";
function CatFacts() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://catfact.ninja/facts?limit=5")
      .then((res) => res.json())
      .then((res) => setData(res.data))
      .then(setIsLoading(false))
      .catch((err) => console.log(err));
  }, []);
  console.log(data);
  return (
    <>
      <h1>Cat facts</h1>
      {isLoading ? (
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
