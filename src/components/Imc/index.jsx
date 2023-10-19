import { useState } from "react";
import "./imc.css";

const Imc = () => {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);

  const renderizaResultado = () => {
    const valorImc = (peso / (altura * altura)).toFixed(2);

    if (valorImc < 17) {
      return <p>Seu Imc é {valorImc}, Você está muito abaixo do peso.</p>;
    } else if (valorImc < 19) {
      return <p>Seu Imc é {valorImc}, Você está abaixo do peso.</p>;
    } else if (valorImc < 25) {
      return <p>Seu Imc é {valorImc}, Você está com peso normal.</p>;
    } else if (valorImc < 30) {
      return <p>Seu Imc é {valorImc}, Você está acima do peso.</p>;
    } else if (valorImc < 35) {
      return <p>Seu Imc é {valorImc}, Você está com obesidade grau I.</p>;
    } else if (valorImc < 40) {
      return <p>Seu Imc é {valorImc}, Você está com obesidade grau II.</p>;
    } else {
      <p>Seu Imc é {valorImc}, você está com obesidade grau III</p>;
    }
  };
  return (
    <div className="container">
      <form>
        <h1>Calculadora de IMC</h1>
        <input
          type="number"
          placeholder="Seu Peso"
          onChange={(evento) => setPeso(evento.target.value)}
        />
        <input
          type="number"
          placeholder="Sua Altura"
          onChange={(evento) => setAltura(evento.target.value)}
        />
        {renderizaResultado()}
      </form>
    </div>
  );
};

export default Imc;
