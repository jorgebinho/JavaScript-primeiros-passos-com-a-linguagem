console.log(`Trabalhando com listas: `);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)
listaDeDestinos.push(`Curitiba`)//adicionando um item na listagem

console.log("DESTINOS POSSÍVEIS");
console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1);//removendo São Paulo da listagem
console.log("DESTINOS POSSÍVEIS");
console.log(listaDeDestinos);
