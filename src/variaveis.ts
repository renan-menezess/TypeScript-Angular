/** 
 * variaveis
 * 
*/
//tipos primitivos: boolean, number, string
let ligado: boolean = false;
let nome: string = "Renan";
let idade: number = 30;
let altura: number = 1.9;

//tipos especiais: null, undefined
//null
let nulo : null = null;
//undefined
let indefinido : undefined = undefined;

//tipos abrangentes: any, void
//void
let retorno:void;
//any
let retornoView:any = false;

//objeto - sem previsibilidade
let produto:object = {
    name:"Renan",
    cidade:"Sp",
    idade: 20,
};

//objeto tipado - com previsibilidade
type produtoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};

let meuProduto: produtoLoja = {
    nome: "Tênis",
    preco: 45,
    unidades: 5,
};

/**
 * arrays
 */

let dados: string[] = ["Renan","Ana","Adriana"];

let infos: (string | number)[] = ["Renan", 235];

/**
 * Tuplas
 */
let boleto:[string,number,number] = ["agua conta", 256.32, 25465435];

/**
 * arrays métodos
 */

/**
 * Datas
 */
let aniversario:Date = new Date ("2022-12-01 05:00");
console.log(aniversario.toString());


