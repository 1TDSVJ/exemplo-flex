//* Tudo em JS é objeto!
// String simples: let nome= '' é igual a let nome = new String('')
// Let numero = '100' = let numero = new Number(100)
//? Os tipos primitivos do Java em JavaScript são entendidos como classes

// Declarando um objeto
var carro = {
    modelo: 'Uno',
    fabricacao: '1997',
    cor: 'prata',
    ligar: function(){
        alert('LIGADO')
    },
    desligar: function(){
        alert('DESLIGADO')
    }
}

console.log(carro)