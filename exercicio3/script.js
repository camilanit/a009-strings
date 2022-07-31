const frase= `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`
const exchange= frase.replace("verde","rosa").replace("azul","laraja")
console.log(exchange)
const maiuscula = exchange.replace('mas não deixe o gato sair','mas não deixe o gato sair'.toUpperCase())
console.log( maiuscula)
