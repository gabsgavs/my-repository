// Classe base Funcionario
class Funcionario {
    constructor(nome, idade, cargo) {
        if (!nome || !idade || !cargo) {
            throw new Error('Nome, idade e cargo são obrigatórios.');
        }
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`;
    }

    trabalhar() {
        return `${this.nome} está trabalhando...`;
    }
}

// Classe Gerente que herda de Funcionario
class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        if (!departamento) {
            throw new Error('Departamento é obrigatório para Gerente.');
        }
        this.departamento = departamento;
    }

    gerenciar() {
        return `${this.nome} está gerenciando o departamento de ${this.departamento}.`;
    }
}

// Classe Desenvolvedor que herda de Funcionario
class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        if (!linguagem) {
            throw new Error('Linguagem de programação é obrigatória para Desenvolvedor.');
        }
        this.linguagem = linguagem;
    }

    programar() {
        return `${this.nome} está programando em ${this.linguagem}.`;
    }
}

// Função para criar funcionários e exibir resultados
function criarFuncionarios() {
    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value, 10);
    const cargo = document.getElementById('cargo').value;
    const departamento = document.getElementById('departamento').value;
    const linguagem = document.getElementById('linguagem').value;

    const saida = document.getElementById('saida');
    saida.innerHTML = '';

    try {
        let funcionario;

        if (cargo.toLowerCase() === 'gerente') {
            funcionario = new Gerente(nome, idade, cargo, departamento);
            saida.innerHTML += `${funcionario.seApresentar()}<br>`;
            saida.innerHTML += `${funcionario.trabalhar()}<br>`;
            saida.innerHTML += `${funcionario.gerenciar()}<br>`;
        } else if (cargo.toLowerCase() === 'desenvolvedor') {
            funcionario = new Desenvolvedor(nome, idade, cargo, linguagem);
            saida.innerHTML += `${funcionario.seApresentar()}<br>`;
            saida.innerHTML += `${funcionario.trabalhar()}<br>`;
            saida.innerHTML += `${funcionario.programar()}<br>`;
        } else {
            throw new Error('Cargo não reconhecido. Informe "Gerente" ou "Desenvolvedor".');
        }

    } catch (error) {
        exibirErro(error.message);
    }
}

// Função para exibir erros na página
function exibirErro(mensagem) {
    const saida = document.getElementById('saida');
    saida.innerHTML = `<span style="color: red;">Erro: ${mensagem}</span>`;
}
