//funções
function addNumber(x: number, y: number): number {
    return x + y;
}

function addToHello(name: string){
    return `Hello ${name}`;
}

console.log(addToHello("Renan"));

//funções Multi Tipos
function callToPhone(phone: number | string):number | string {
    return phone;
}
let soma: number = addNumber(4,7);

console.log(callToPhone(123131313131));

//funções Async
async function getDataBase(id: number): Promise<string> {
    return "Renan";
}