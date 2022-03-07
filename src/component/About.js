import React from "react";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    console.log("This code will execute when the component updates");
  });

  return <div>About page</div>;
};

export default About;
