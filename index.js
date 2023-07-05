// ATIVIDADE 1
function listaDeElementos(insiraAqui) {

    let lista = [];

    if (lista.length <= 10) {
        if (typeof insiraAqui === "string" && insiraAqui.length < 8) {
            lista.push(insiraAqui)
            console.log(`Elemento Inserido com sucesso, a lista agora é: ${lista}`)
        } else {
            console.log('não foi possível inserir este valor')
        }
    }
}

// ATIVIDADE 2
let listaA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let listaB = []

function raizDaMatriz(){
    for (i = 0; i < listaA.length; i++){
        listaB.push(listaA[i] *= listaA[i])
    }
    console.log(listaB)
}


// ATIVIDADE 1
listaDeElementos("Maça")
console.log("---------------------------")
// ATIVIDADE 2
raizDaMatriz();
