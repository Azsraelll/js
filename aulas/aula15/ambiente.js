var num = [3, 4, 1]
num[2] = 8
num.push(5) // coloca um valor e adiciona no ultimo elemento
num.sort() // num.sort() organiza os elementos em ordem crescente

// Exemplo de código
console.log(`Nosso vetor é ${num}`)
console.log(`O vetor tem ${num.length} posições`) //Para saber o tamanho do array utiliza-se o num.lenght
console.log(`O primeiro valor do vetor é ${num[0]}`)

//Forma de automatizar a escrita da variavel composta
for (var pos = 0; pos < num.length; pos++){
    console.log(num[pos])
}

// Forma mais simples
console.log('Forma mais simples')
for(var pos in num){
    console.log(num[pos])
}

//Buscando valores dentro do vetor
console.log(num.indexOf(4))
console.log(num.indexOf(2))
