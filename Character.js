"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Piloto = void 0;
var prompt_sync_1 = __importDefault(require("prompt-sync"));
var teclado = (0, prompt_sync_1.default)();
var dados = [];
//CLASSE PILOTO
var Piloto = /** @class */ (function () {
    function Piloto(nome, velocidade) {
        this.nome = nome;
        this.velocidade = velocidade;
    }
    return Piloto;
}());
exports.Piloto = Piloto;
//criação de um piloto
var toretto = new Piloto("Toretto:", 150);
var relampago = new Piloto("Relampago Marquinhos", 160);
var ayrton = new Piloto("Ayrton:", 170);
var fuga = new Piloto("Piloto de Fuga:", 180);
while (true) {
    console.clear();
    console.log("=====================================");
    console.log("||Corrida Maluca - Desafio em Tokyo||");
    console.log("=====================================");
    console.log("||  1. Escolher Piloto e Pista     ||");
    console.log("||  2. Treinar                     ||");
    console.log("||  3. Sair                        ||");
    console.log("=====================================");
    var menu = +teclado("Escolha uma opção: ");
    while (menu === 2) {
        console.clear();
        console.log("=====================================");
        console.log("||======= Escolha de Piloto =======||");
        console.log("||======= Para ser Treinado =======||");
        console.log("=====================================");
        console.log("||  1. Toretto (vel: " + toretto.velocidade + ")");
        console.log("||  2. Rel\u00E2mpago Marquinhos (vel: " + relampago.velocidade + ")");
        console.log("||  3. Ayrton Senna (vel: " + ayrton.velocidade + ")");
        console.log("||  4. Piloto de Fuga (vel: " + fuga.velocidade + ")");
        console.log("=====================================");
        var treinarPiloto = +teclado("Digite seu Piloto a ser treinado: ");
        if (treinarPiloto === 1) {
            toretto.velocidade += 30;
            console.log();
            console.log("Parabéns! Toretto teve um aumento de 30 na sua velocidade!");
            console.log();
        }
        else if (treinarPiloto === 2) {
            relampago.velocidade += 30;
            console.log();
            console.log("Parabéns! Relâmpago Marquinhos teve um aumento de 30 na sua velocidade!!");
            console.log();
        }
        else if (treinarPiloto === 3) {
            ayrton.velocidade += 30;
            console.log();
            console.log("Parabéns! Ayrton Senna teve um aumento de 30 na sua velocidade!!");
            console.log();
        }
        else if (treinarPiloto === 4) {
            fuga.velocidade += 30;
            console.log();
            console.log("Parabéns! Piloto de Fuga teve um aumento de 30 na sua velocidade!!");
            console.log();
        }
        console.log("Treinar mais alguém? (S/N)");
        console.log();
        var continuarTreinando = teclado(" ");
        if (continuarTreinando === "s" || continuarTreinando === "S") {
        }
        else {
            break;
        }
    }
    if (menu === 3) {
        break;
    }
    console.clear();
    console.log("=====================================");
    console.log("||======= Escolha de Piloto =======||");
    console.log("=====================================");
    console.log("||  1. Toretto (vel: " + toretto.velocidade + ")");
    console.log("||  2. Rel\u00E2mpago Marquinhos (vel: " + relampago.velocidade + ")");
    console.log("||  3. Ayrton Senna (vel: " + ayrton.velocidade + ")");
    console.log("||  4. Piloto de Fuga (vel: " + fuga.velocidade + ")");
    console.log("=====================================");
    var pilotoEscolhido = +teclado("Digite seu Piloto para Correr: ");
    if (pilotoEscolhido === 1) {
        dados.push("Toretto");
    }
    else if (pilotoEscolhido === 2) {
        dados.push("Relâmpago Marquinhos");
    }
    else if (pilotoEscolhido === 3) {
        dados.push("Ayrton Senna");
    }
    else if (pilotoEscolhido === 4) {
        dados.push("Piloto de Fuga");
    }
    console.clear();
    console.log("=====================================");
    console.log("||======= Escolha de Pista ========||");
    console.log("=====================================");
    console.log("||  1. Ruas (fácil)                ||");
    console.log("||  2. Montanhas (normal)          ||");
    console.log("||  3. Circuito Fechado (difícil)  ||");
    console.log("||  4. Sanga Funda (hardcore)      ||");
    console.log("=====================================");
    var pistaEscolhida = +teclado("Digite sua Pista: ");
    var multiplicadorDificuldade = 1;
    if (pistaEscolhida === 1) {
        multiplicadorDificuldade = 150;
        dados.push("Ruas");
    }
    else if (pistaEscolhida === 2) {
        dados.push("Montanhas");
        multiplicadorDificuldade = 175;
    }
    else if (pistaEscolhida === 3) {
        dados.push("Circuito Fechado");
        multiplicadorDificuldade = 200;
    }
    else if (pistaEscolhida === 4) {
        dados.push("Sanga Funda");
        multiplicadorDificuldade = 250;
    }
    console.clear();
    if (dados[1] === "Sanga Funda") {
        console.log("Pronto para correr com o " + dados[0] + " na " + dados[1] + "? (S/N) ");
    }
    else if (dados[1] === "Circuito Fechado") {
        console.log("Pronto para correr com o " + dados[0] + " no " + dados[1] + "? (S/N) ");
    }
    else {
        console.log("Pronto para correr com o " + dados[0] + " nas " + dados[1] + "? (S/N) ");
    }
    var velocidadeTotal = 0;
    var confirmar = teclado(" ");
    if (confirmar === "s" || confirmar === "S") {
        if (dados[0] == "Toretto") {
            velocidadeTotal = toretto.velocidade / multiplicadorDificuldade;
            if (velocidadeTotal >= 1) {
                console.log("Parab\u00E9ns, Torreto \u00E9 o campe\u00E3o!");
            }
            else {
                console.log("Vixeee, Torreto perdeu!");
            }
        }
        else if (dados[0] == "Relâmpago Marquinhos") {
            velocidadeTotal = relampago.velocidade / multiplicadorDificuldade;
            if (velocidadeTotal >= 1) {
                console.log("Parab\u00E9ns, Rel\u00E2mpago Marquinhos \u00E9 o campe\u00E3o!");
            }
            else {
                console.log("Vixeee, Rel\u00E2mpago Marquinhos perdeu!");
            }
        }
        else if (dados[0] == "Ayrton Senna") {
            velocidadeTotal = ayrton.velocidade / multiplicadorDificuldade;
            if (velocidadeTotal >= 1) {
                console.log("Parab\u00E9ns, Ayrton Senna \u00E9 o campe\u00E3o!");
            }
            else {
                console.log("Vixeee, Ayrton Senna perdeu!");
            }
        }
        else if (dados[0] == "Piloto de Fuga") {
            velocidadeTotal = fuga.velocidade / multiplicadorDificuldade;
            if (velocidadeTotal >= 1) {
                console.log("Parab\u00E9ns, Piloto de Fuga \u00E9 o campe\u00E3o!");
            }
            else {
                console.log("Vixeee, Piloto de Fuga perdeu!");
            }
        }
    }
    console.log();
    console.log("Deseja continuar jogando? (S/N)");
    var continuar = teclado(" ");
    if (continuar === "s" || continuar === "S") {
        dados.pop();
        dados.pop();
    }
    else {
        break;
    }
}
