import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import Routes from "./components/pages/Routes";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Routes />, document.getElementById("root"));
registerServiceWorker();
