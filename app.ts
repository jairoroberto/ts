let linguagem: string =  'TypeScript - Aprendendo';
let texto: string = `Olá ${ linguagem }`;
let idade: number = 44;

//linguagem = 2432534;

let getPerfil = function(nome: String, idade: number, email: string):void{
  console.log(nome, idade, email);
};

function getIdade(idade){
  return idade + " Anos";
}

getPerfil("Jairo Roberto", 36, "jairorob@gmail.com");
//let idadeAnos:number = getIdade(45); existe um erro de inconsistência de tipo (tipagem)
//

//Maneira 01 de declarar
//let retornaPerfil = (nome: String, idade: number, email: string):void => console.log(nome, idade, email);


//Maneira 02 de declarar
let retornaPerfil = (nome: String, idade: number, email: string):void => {
  nome = nome.toUpperCase();
  console.log(nome, idade, email);
};



//
console.log(texto, idade)
