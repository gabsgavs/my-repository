let bebida = 'café'; 
let valor;

switch (bebida.toLowerCase()) {
    case 'café':
        valor = 3.50;
        console.log(`Você escolheu ${bebida}. O valor é R$ ${valor.toFixed(2)}.`);
        break;
    case 'leite':
        valor = 2.80;
        console.log(`Você escolheu ${bebida}. O valor é R$ ${valor.toFixed(2)}.`);
        break;
    case 'chá':
        valor = 2.00;
        console.log(`Você escolheu ${bebida}. O valor é R$ ${valor.toFixed(2)}.`);
        break;
    default:
        console.log("Opção inválida. Por favor, escolha entre café, leite ou chá.");
}