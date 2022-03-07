import React, { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("This code will execute when the component is mounted");
    return () => {
      console.log(
        "Behavior right before the compodddnent is removed from the DOM."
      );
      setCount(count + 1);
    };
  }, [count]);
  return <div>home page</div>;
};

export default Home;
