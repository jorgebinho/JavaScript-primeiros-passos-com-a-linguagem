console.log(`Trabalhando com condicionais: `);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

const idadeComprador = 17;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("DESTINOS POSSÍVEIS");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true) { 
    console.log("Boa Viagem!!");
    listaDeDestinos.splice(2,1);
} else {
    console.log("Não é maior de idade e não posso vender");
}

console.log("Embarque: \n\n")
if(idadeComprador >= 18 && temPassagemComprada == true){
    console.log("Boa viagem");
} else{
   console.log("Você não pode embarcar");
} 

console.log("DESTINOS POSSÍVEIS");
console.log(listaDeDestinos);
