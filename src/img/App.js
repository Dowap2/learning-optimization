import React, { useState, useMemo } from "react";
import propTypes from "prop-types";

function Q3() {
  const [count, setCount] = useState(0);

  const plusOne = useMemo(() => setCount(count + 1), [count]);

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
