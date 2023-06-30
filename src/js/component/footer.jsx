import React from "react";

function Jumbotron(props) {
  return (
    <div className="col-md-12 g-0">
      <div className="rounded-3 position-relative w-100">
        <div className="position-absolute top-50 start-50 translate-middle mb-5 w-100 p-5">
          <h1 className="display-5 fw-bold opacity-80 bg-light text-primary">
            {props.titulo1}{" "}
          </h1>
          <p className="col-md-8 fs-4 opacity-80 bg-light text-primary">
            {props.parrafo1}
          </p>
          <button className="btn btn-success btn-lg mx-3" type="button">
            Log In
          </button>
          <button className="btn btn-success btn-lg" type="button">
            Sign Up
          </button>
        </div>
        <img
          src={props.imagen1}
          className="card-img-top w-100"
          style={{ objectFit: "cover", height: "400px" }}
          alt="..."
        />
      </div>
    </div>
  );
}

export default Jumbotron;
