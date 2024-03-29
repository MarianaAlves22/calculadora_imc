// import React, {useState, useEffect} from "react";
import TabelaImc from "./components/Tabela/index";
import Perfil from "./components/Perfil/index";
import Formulario from "./components/Formulario/index";

function App() {

  return (
    <>
      <div className="divBlock">
        <Perfil></Perfil>
        <section id="result">
          <Formulario></Formulario>
          <section id="reference-table">
            <TabelaImc />
          </section>
        </section>
      </div>
    </>
  )
}

export default App