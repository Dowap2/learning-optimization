import React, { useState, useCallback } from "react";
import propTypes from "prop-types";

function Q3() {
  const [count, setCount] = useState(0);

  const plusOne = useCallback(() => setCount(count => count + 1), []);

  return (
    <div>
      <Child name="COUNTER1" />
      <>: </>
      {count}
      <> </>
      <button onClick={plusOne}>+</button>
    </div>
  );
}
export default Q3;

const Child = ({ name }) => {
  return <span style={{ color: "red" }}>{name}</span>;
};

Child.propTypes = {
  name: propTypes.string.isRequired
};
