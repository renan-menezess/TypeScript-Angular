"use strict";
let ligado = false;
let nome = "Renan";
let idade = 30;
let altura = 1.9;
let nulo = null;
let indefinido = undefined;
let retorno;
let retornoView = false;
let produto = {
    name: "Renan",
    cidade: "Sp",
    idade: 20,
};
let meuProduto = {
    nome: "Tênis",
    preco: 45,
    unidades: 5,
};
let dados = ["Renan", "Ana", "Adriana"];
let infos = ["Renan", 235];
let boleto = ["agua conta", 256.32, 25465435];
let aniversario = new Date("2022-12-01 05:00");
console.log(aniversario.toString());
function addNumber(x, y) {
    return x + y;
}
function addToHello(name) {
    return `Hello ${name}`;
}
let soma = addNumber(4, 7);
console.log(addToHello("Renan"));
