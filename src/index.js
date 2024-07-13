let victoryDefault = vitoriasDerrotas(50,5) // Colocar valores de vitoria e derrota
let level = "" // Essa variavel recebe um valor de acordo com a estrutura condicional de IF/ELSE IF

function vitoriasDerrotas(vitoria,derrota){ // Aqui é uma função que recebe como parâmetro a quantidade de vitórias e derrotas!
    return vitoria - derrota
}
if (victoryDefault <= 10 ){ // Estrutura condicional
    level = "Ferro"
}else if (victoryDefault >= 11 && victoryDefault <= 20){
    level = "Bronze"
}else if (victoryDefault >= 21 && victoryDefault <= 50){
    level = "Prata"
}else if (victoryDefault >= 51 && victoryDefault <= 80){ 
    level = "Ouro"
}else if (victoryDefault >= 81 && victoryDefault <= 90 ){
    level = "Diamante"
}else if (victoryDefault >= 91 && victoryDefault <= 100 ){
    level = "Lendário"
}else if (victoryDefault >= 101){
    level = "Imortal"
}
console.log("O Herói tem " + victoryDefault + " vitórias, e está no nível " + level); //output