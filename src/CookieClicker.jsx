import { useState } from "react";

function CookieClicker() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count} cookies</h1>
      <button onClick={setCount(count + 1)}>Click me</button>
    </>
  );
}
export default CookieClicker;
