let saldoDeVitorias = resultado(100 , 50)
let nivelDoHeroi

function resultado(vitorias , derrotas){
    let saldoDeVitorias = vitorias - derrotas
    return saldoDeVitorias
}

switch(true){
    case saldoDeVitorias <= 10:
        nivelDoHeroi = "Ferro"
        break
    case saldoDeVitorias >= 11 && saldoDeVitorias <= 20:
        nivelDoHeroi = "Bronze"
        break
    case saldoDeVitorias >= 21 && saldoDeVitorias <= 50:
        nivelDoHeroi = "Prata"
        break
    case saldoDeVitorias >= 51 && saldoDeVitorias <= 80:
        nivelDoHeroi = "Ouro"
        break
    case saldoDeVitorias >= 81 && saldoDeVitorias <= 90:
        nivelDoHeroi = "Diamante"
        break
    case saldoDeVitorias >= 91 && saldoDeVitorias <= 100:
        nivelDoHeroi = "Lendário"
        break
    case saldoDeVitorias >= 101:
        nivelDoHeroi = "Imortal"
        break
}
console.log(" O Herói tem saldo de " + saldoDeVitorias + " e está no nível " + nivelDoHeroi)