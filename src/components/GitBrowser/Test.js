import React, { useState } from "react";

export default function Test(props) {
  const [count, setCount] = useState(5);
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h3>{props.message}</h3>
      Count: {count}
      <hr />
      <div style={{ padding: "10px" }}>
        <button
          style={{ marginRight: "10px" }}
          className="btn btn-primary"
          type="button"
          onClick={handleIncrease}
        >
          Increase
        </button>
        <button
          className="btn btn-warning"
          type="button"
          onClick={handleDecrease}
        >
          Decrease
        </button>
      </div>
    </div>
  );
}
