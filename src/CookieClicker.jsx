import { useState } from "react";

function CookieClicker() {
  const [count, setCount] = useState(0);
  const [upgradeCount, setUpgradeCount] = useState(0);
  const upgradePrice = 10;
  10;
  return (
    <>
      <h1>{count} cookies</h1>
      <h2>You have {upgradeCount} upgrades</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        <img width="80px" src="cookie.png" />
      </button>
      <button
        onClick={() => {
          if (count >= upgradePrice) {
            setCount(count - upgradePrice);
            setUpgradeCount(upgradeCount + 1);
          }
        }}
      >
        Buy some upgrade (cost 10 cookies)
      </button>
    </>
  );
}
export default CookieClicker;
