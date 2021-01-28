console.log(`Trabalhando com condicionais: `);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

const idadeComprador = 17;

console.log("DESTINOS POSSÍVEIS");
console.log(listaDeDestinos);

if(idadeComprador >= 18){
    listaDeDestinos.splice(1, 1);//remover se for maior de idade
} else {
    console.log("COMPRADOR MENOR DE IDADE");
}
 
console.log("DESTINOS POSSÍVEIS");
console.log(listaDeDestinos);
