import React from "react";
import "./StatsGerais.css";


const date = new Date();
const miliseconds = date.getSeconds();
let quote = "...nesse tempo voce poderia zerar Alan Wake 2 por 19 vezes"

if (miliseconds < 10) {
  quote = "...nesse tempo voce poderia zerar Alan Wake 2 por 17 vezes";
} else if (miliseconds < 20) {
  quote = "...são 12 dias assistindo G&P sem parar!";
} else if (miliseconds < 30) {
  quote = "...voce poderia ir e voltar para o Japão 6 vezes assitindo ao G&P sem parar";
} else if (miliseconds < 40) {
  quote = "...o mesmo tempo para zerar Super Mario World 61 vezes";
} else if (miliseconds < 50) {
  quote = "...o mesmo tempo de zerar Skyrim 8 vezes seguidas";
} else {
  quote = "...o equivalente a asssitir todos os filmes de Star Wars 12 vezes";
}




function statsgerais(){
    return(
        <div className="Stats-container">
            <h2 className="h222">Estatisticas gerais do G&P</h2>
            <p>◎ Horas totais de programa: 18.518 minutos/308 horas</p>
              <p className="sub-texto">{quote}</p>
            <p>◎ Programa de maior duração: 150 minutos </p>
              <p className="sub-texto">  (Game & Prosa LIVRE: Vamos zerar LITTLE HOPE com a Ana!) </p>
            <p>◎ Programa de menor duração: 28 minutos </p>
              <p className="sub-texto">  (Game & Prosa CAST - Episódio 4: TRILHAS SONORAS)</p>
            <p>◎ Quantidade de programas indisponiveis: 1</p>
            <p>◎ Vezes que a Yupi roubou a cena: 38</p>
        </div>
    )
}

export default statsgerais;