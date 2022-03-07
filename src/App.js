// import "./App.css";
// import Profile from "./Profile";
// import React, { Component } from "react";

// function App() {
//   function App2() {
//     return <div>App2 component</div>;
//   }
//   return (
//     <div className="App">
//       <Profile names="Ankit" />
//       <User />
//       {App2()}
//       <App2 />
//     </div>
//   );
// }

// class User extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Ankit",
//       data: 0,
//     };
//   }
//   App3() {
//     this.setState({ name: "JP" });
//     this.setState({ data: this.state.data + 1 });
//   }
//   render() {
//     return (
//       <div>
//         <h1>User </h1>
//         <h3>{this.state.name}</h3>
//         <h3>{this.state.data}</h3>
//         <button onClick={() => this.App3()}>click</button>
//       </div>
//     );
//   }
// }

// export default App;

// import { useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import About from "./component/About";
import Home from "./component/Home";
const App = () => {
  // useEffect(() => {
  //   console.log("This code will execute when the component is mounted");
  //   return () => {
  //     console.log(
  //       "Behavior right before the component is removed from the DOM."
  //     );
  //   };
  // }, []);
  return (
    <>
      <div>
        <Link to="/">Home</Link> <Link to="/about">About</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};
export default App;
