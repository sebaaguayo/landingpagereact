//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Cimiento from "./component/home.jsx";

//render your react application
ReactDOM.render(<Cimiento> </Cimiento>, document.querySelector("#app"));
//metodo para poder pintar el sitio web
