// const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
// const minhaStringTrim = minhaString.trim()

// console(minhaStringTrim)
// console.log(`Sem o comando Trim há ${minhaString.length} carateres \n Com o comando Trim a variavel fica com ${minhaStringTrim.lenght} carateres`)

// const textoSubstituido = minhaString.replace(`________.`,`sticioso`)
// console. log(textoSubstituido)

const minhaString1= "Eu não sou supersticioso, mas sou um pouco  ________.     ";
const minhaString1Trim= minhaString1.trim()
console.log(minhaString1)
console.log(`antes ${minhaString1.length} e depois ${minhaString1Trim.length}`)
const minhaSubst = minhaString1Trim.replace('________.','sticioso.' )
console.log (minhaSubst)
