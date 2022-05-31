const prompt = require ("prompt-sync")()
console.clear()

console.log("Felipe, tem 29 anos, e é jogador de Poker");
console.log("sua vida é completamente monotona e cheia do mesmo todo dia");
console.log("Felipe tem uma namorada que o ama muito e o acompanha nas suas tomadas de decisões");  
console.log("Certo dia, ele resolve mudar de vida e começa a estudar programação");

console.log()
let pergunta1 = prompt("1) sua familia apoia essa mudança? 1.[SIM] 2.[NÃO]")


console.log()
let pergunta2 = prompt("2) você esta pronto para mudar de área? 1.[SIM] 2.[NÃO]")
 
    

console.log()
let pergunta3 = prompt("3) sua namorada apoia essa mudança? 1.[SIM] 2.[NÃO]")
 
    

console.log()
let pergunta4 = prompt("4) você está pronto para essa nova jornada ? 1.[SIM] 2.[NÃO]")
 

console.log()
let pergunta5 = prompt("5) você vai conseguir estudar todos os dias ? 1.[SIM] 2.[NÃO]")
 
   


if (pergunta1 == 1 || pergunta1 == "s" || pergunta1 == "S" || pergunta1 == "sim" || pergunta1 == "SIM") {
    pontuacao++
}
if (pergunta2 == 1 || pergunta2 == "s" || pergunta2 == "S" || pergunta2 == "sim" || pergunta2 == "SIM") {
    pontuacao++
}
if (pergunta3 == 1 || pergunta3 == "s" || pergunta3 == "S" || pergunta3 == "sim" || pergunta3 == "SIM") {
    pontuacao++
}       
if (pergunta4 == 1 || pergunta4 == "s" || pergunta4 == "S" || pergunta4 == "sim" || pergunta4 == "SIM") {
    pontuacao++
}
if (pergunta5 == 1 || pergunta5 == "s" || pergunta5 == "S" || pergunta5 == "sim" || pergunta5 == "SIM") {
    pontuacao++
}
console.clear()


if (pontuacao <= 2) {
    console.log(`\nVocê não está pronto!`)
} else if (pontuacao == 3) {
    console.log(`\nVocê precisa melhorar!`)
} else if (pontuacao >= 4) {
    console.log(`\nParabéns você é um heroi e conseguiu!`)
}
