/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.

2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades.

3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
*/

enum CORES_DO_ARCO_IRIS {
  AMARELO = "Amarelo",
  VERMELHO = "Vermelho",
  AZUL = "Azul",
  VERDE = "Verde",
  LARANJA = "Laranja",
  ANIL = "Anil",
  VIOLETA = "Violeta"
}

type Pessoa = {
  nome: string
  idade: number
  corFavorita: CORES_DO_ARCO_IRIS
}

const fulano : Pessoa = {
  nome: "Fulano",
  idade: 20,
  corFavorita: CORES_DO_ARCO_IRIS.AZUL
}

const ciclano : Pessoa = {
  nome: "Ciclano",
  idade: 21,
  corFavorita: CORES_DO_ARCO_IRIS.VERDE
}

const beltrano : Pessoa = {
  nome: "Beltrano",
  idade: 22,
  corFavorita: CORES_DO_ARCO_IRIS.VIOLETA
}