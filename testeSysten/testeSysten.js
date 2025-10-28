import readline from "readline-sync";

while(true){
    console.log("\nBem vindo ao Systen Thom!")

    let nome = readline.question("\nQual o seu nome?\n");
    let idade = readline.question(`\nSeja bem vindo ${nome}, qual a sua idade?\n`)
    console.log(`\nMuito bem ${nome}, sua idade foi registrada como ${idade} anos.`)

    break;
}