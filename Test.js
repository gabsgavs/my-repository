
// Classe base Funcionario
class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`);
    }

    trabalhar() {
        console.log(`${this.nome} está trabalhando...`);
    }
}

// Classe Gerente que herda de Funcionario
class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo); // Chama o construtor da classe pai
        this.departamento = departamento;
    }

    gerenciar() {
        console.log(`${this.nome} está gerenciando o departamento de ${this.departamento}.`);
    }
}

// Classe Desenvolvedor que herda de Funcionario
class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo); // Chama o construtor da classe pai
        this.linguagem = linguagem;
    }

    programar() {
        console.log(`${this.nome} está programando em ${this.linguagem}.`);
    }
}

// Criando instância de um Gerente
const gerente = new Gerente('Gabriel', 40, 'Gerente', 'Tecnologia');
gerente.seApresentar();
gerente.trabalhar(); 
gerente.gerenciar(); 

// Criando instância de um Desenvolvedor
const desenvolvedor = new Desenvolvedor('Gaviorno', 30, 'Desenvolvedora', 'JavaScript');
desenvolvedor.seApresentar(); 
desenvolvedor.trabalhar(); 
desenvolvedor.programar(); 
