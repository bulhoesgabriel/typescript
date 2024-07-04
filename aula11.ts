// generics (<>)

interface Pessoa<T = Aluno> {
    nome: string
    idade: number
    profissao: T
}

interface Aluno {
    matricula: string
}

interface Engenheiro {
    crea: string
}

interface Medico {
    crm: string
}

let medico: Pessoa<Medico>

let aluno: Pessoa

let engenheiro: Pessoa<Engenheiro>

// generics em arrays

type Lista<T = string> = T[]

let lista: Lista<string>

// o type pode receber argumentos, e a partir desses argumentos receber coisas diferentes dentro do type, aumenta o número de possibilidades