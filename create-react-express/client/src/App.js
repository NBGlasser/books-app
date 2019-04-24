// import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/saved";
import Search from "./pages/search";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Saved} />
          <Route exact path="/books" component={Saved} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

