import React, { useState } from "react";
import img from "../assets/image.png"
import "./LoginPage.css"

const LoginPage = () => {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [resultado, setResultado] = useState("");

  const calculoImc = () => {
    // Validação dos campos
    if (!peso || !altura) {
      setResultado("Insira valores válidos para peso e altura.");
      return;
    }

    const alturaEmMetros = parseFloat(altura);
    const pesoEmKg = parseFloat(peso);

    if (alturaEmMetros <= 0 || pesoEmKg <= 0) {
      setResultado("Preencha os campos com números maiores que 0.");
      return;
    }

    // Cálculo do IMC
    const imc = pesoEmKg / (alturaEmMetros * alturaEmMetros);
    setResultado(`Seu IMC é: ${imc.toFixed(2)}`);

    setPeso ("");
    setAltura("");
  };

  return (
    <div className="primary-div">
      <h1>Cálculo IMC</h1>
      <img src={img} />
      <form action="imc" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="peso">Digite seu peso:</label>
        <input
          type="number"
          name="peso"
          id="peso"
          placeholder="Ex: 86"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <label htmlFor="altura" value="altura">
          Digite sua altura:
        </label>
        <input
          type="number"
          name="altura"
          id="altura"
          value={altura}
          placeholder="Ex: 1,74"
          onChange={(e) => setAltura(e.target.value)}
        />
      </form>
      <button type="button" onClick={calculoImc}>
        Calcular IMC
      </button>
      {resultado && <p>{resultado}</p>}
    </div>
  );
};

export default LoginPage;
