import React from "react";

const frase = (props) => {
  return (
    <div className="tarjetas card w-60 my-5 mr-5 border border-radius text-center">
      <div className="card shadow">
        <div className="row ">
          <div className="col-md-4">
            <img src={props.fraseS.image} className="card-img w-50" alt= {props.fraseS.character}/>
          </div>

          <div className="col-md-8">
            <div className="card-body">
  <h3 className="card-title">{props.fraseS.character}</h3>
              <p className="lead">
               {props.fraseS.quote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default frase;
