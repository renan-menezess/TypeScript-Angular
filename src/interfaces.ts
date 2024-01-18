//interfaces (type x interface)
type robot = {
    id: number | string;
    name: string;
};

interface robot2 {
    readonly id: number | string;
    name: string;
    sayHello(): string;
}

const bot1: robot2 = {
    id: "1",
    name: "megaman",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
};

const bot2: robot2 = {
    id: "1",
    name: "megaman",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
};

class Pessoa implements robot2 {
    id: string | number;
    name: string;

    constructor(id: string | number, name: string){
        this.id = id;
        this.name = name;
    }
    sayHello(): string {
        return `Hello ${this.name}`;
    }
}

const p = new Pessoa(1, "gustman");
console.log(p.sayHello());