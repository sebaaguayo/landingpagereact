import React from "react";

function Card(props) {
  return (
    <div className="card-img-top my-5 h-100 p-3" alt="...">
      <img
        src={props.imagen}
        className="card-img-top"
        style={{ objectFit: "cover", width: "100%", height: "40vh" }}
        alt="..."
      ></img>
      <div className="card-body">
        <h5 className="card-title my-1">{props.titulo}</h5>
        <p className="card-text my-1">{props.parrafo}</p>
        <a
          href="#"
          className="btn btn-success my-1"
          style={{ border: "1px solid black" }}
        >
          Find out More!
        </a>
      </div>
    </div>
  );
}

export default Card;
//los prop.types estructuras de datos, que tipo de datos de props ya definidos. y props primero antes de usar el prop.types (variable qe creo para dar informacion...)
//los mandamientos de react
//1- toda etiqueta que se abre, se debe cerrar
//2- toda etiqueta de srtyle en line se comporta como si fuera n objeto en JS
// style = "width: 18rem;"
// al Style = {   } indica que usaremos js dentro del html
// b.) style = { {} } indica que usaremos un objeto en js
// c.) style = {{width: "18rem"}}
//3- crear estilos
// let estilos {width: 18rem }
//la palabra class ya existe, con propositos diferentes... HTML y JS
//toda Class de html se va a transformar a className!!
//defino una variable en el componente Card, props parametros que defino en mis funciones de JSX, les paso informacion desde el componente padre(funcion card) y el componente hijo (card en home, el render del componente card) le paso la informacion
//prop.types es la definicion del tipo de dato
