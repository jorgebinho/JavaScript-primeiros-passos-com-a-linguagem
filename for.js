console.log(`\nTrabalhando com loops: `);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

const idadeComprador = 17;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Rio de Janeiro";

console.log("\n DESTINOS POSSÍVEIS");
console.log(listaDeDestinos);

const podeComprar =  idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false

for(let cont = 0 ; cont <3 ; cont++){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        console.log("Destino existe");
        break;
}
}