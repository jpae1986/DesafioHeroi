const readline = require('readline');

// Configura o recebimento de informações do usuário no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para perguntar o nome do herói
function askForHero (){
    rl.question("Digite o nome do herói: ", (nome) => {
        // Função para perguntar quanto de experiência tem o herói
        askForXP(nome);
    });
};

// Função para perguntar quanto de experiência tem o herói
const askForXP = (nome) => {
    rl.question("Digite a quantidade de experiência (XP): ", (xp) => {
        const xpHeroi = parseInt(xp, 10);

        if (isNaN(xpHeroi) || xpHeroi < 0) {
            console.log("Por favor, insira um valor válido.");
            askForXP(nome); // Chama novamente se a função caso a entrada seja inválida
        } else {
            // Determina o nível do herói
            let nivel;
            if (xpHeroi < 1000) {
                nivel = "Ferro";
            } else if (xpHeroi <= 2000) {
                nivel = "Bronze";
            } else if (xpHeroi <= 5000) {
                nivel = "Prata";
            } else if (xpHeroi <= 7000) {
                nivel = "Ouro";
            } else if (xpHeroi <= 8000) {
                nivel = "Platina";
            } else if (xpHeroi <= 9000) {
                nivel = "Ascendente";
            } else if (xpHeroi <= 10000) {
                nivel = "Imortal";
            } else {
                nivel = "Radiante";
            }

            // Exibe a mensagem final
            console.log(`O Herói ${nome} está no nível ${nivel}`);
            askForAnotherHero(); // Pergunta se deseja outro herói
        }
    });
};

// Função para perguntar se deseja ver outro herói
const askForAnotherHero = () => {
    rl.question("Deseja ver outro herói? (s/n): ", (resposta) => {
        if (resposta.toLowerCase() === 's') {
            askForHero(); // Chama a função para um novo herói
        } else {
            console.log("Obrigado por usar o sistema!");
            rl.close(); // Fecha o sistema
        }
    });
};

// Inicia o processo
askForHero();