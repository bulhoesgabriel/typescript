// extendendo interfaces

// interface Pessoa {
//     nome: string
//     idade: number
// }

// interface Aluno extends Pessoa, PaymentDetailsBase {
//     curso: string
//     ira: number
// }

// com o extends quando digitamos aluno. temos as 4 opções de propriedades (curso, idade, ira e nome)
// o PaymentDetailsBase (veio do além) é só um exemplo pra quando queremos expandir para mais de uma interface

// let aluno: Aluno

// extendendo types & interfaces

// type Pessoa = {
//     nome: string
//     idade: number
// }

// interface Aluno extends Pessoa {
//     curso: string
//     ira: number
// }

// let aluno: Aluno

// extendendo types

type Pessoa1 = {
    nome: string
    idade: number
}

type Aluno1 = {                    // ou: type Aluno1 = Pessoa1 & {
    curso: string                 //          curso: string 
    ira: number                   //          ira: number   
} & Pessoa1                        //     }

let alunoo: Aluno1