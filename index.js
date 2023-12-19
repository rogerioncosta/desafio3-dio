class Hero{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        switch (this.tipo) {
            case "mago":
                this.ataque = "capa invisível";
                break;
            case "guerreiro":
                this.ataque = "espada";
                break;
            case "monge":
                this.ataque = "artes marciais";
                break;
            case "ninja":
                this.ataque = "shuriken";
                break;
        }

        console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }
}

let guerreiro = new Hero("Pikachu", 10, "guerreiro");
guerreiro.atacar();

let ninja = new Hero("Estrela", 10, "ninja");
ninja.atacar();