import React, { useContext } from "react";
import { GreetContext } from "./Footer";

const Demo = () => {
  const devloperName = useContext(GreetContext);

  return (
    <div>
      <h2> {devloperName}</h2>
    </div>
  );
};

export default Demo;
