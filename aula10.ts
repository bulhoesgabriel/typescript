// propriedades opcionais

type Pessoa2 = {
    nome: string
    idade: number
    carro?: string          // ?: diz que é uma propriedade opcional
}

let pessoa: Pessoa2

pessoa = {nome: 'Gabriel', idade: 26} // não dá erro mesmo não declarando a propriedade carro, pois ela é opcional