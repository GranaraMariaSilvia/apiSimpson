import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Frase from "./component/Frase";
import Spinner from "./component/Spinner";

function App() {
  const [fraseSimpsons, setFrasesSimpsons] = useState({});

  const [loader, setLoader] = useState(false);

  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    setLoader(true);
    const api = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
    const resp = await api.json();
    console.log(api);
    console.log(resp[0]);

    setTimeout(()=>{

      setFrasesSimpsons(resp[0]);
      setLoader(false);
    },2000);


  };

  const cargarComponente = loader ? (
    <Spinner></Spinner>
  ) : (
    <Frase fraseS={fraseSimpsons}></Frase>
  );

  return (
    <section className="container text-center my-5">
      <article className=" d-flex flex-column align-items-center">
        <img src={process.env.PUBLIC_URL + "milogo.png"} className="w-50" />
        <button
          className="btn btn-outline-dark w-50 shadow my-5 "
          onClick={() => consultarApi()}
        >
          Mostrar Frase
        </button>
      </article>
      {cargarComponente}
    </section>
  );
}

export default App;
