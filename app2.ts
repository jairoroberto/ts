let nome:string = "Ana";
let Idade:number = 19;
let eMaior:boolean;
//
if(Idade > 17){
  eMaior = true;
}
else{
  eMaior = false;
}

let lista:string[] = ["verde", "azul"];
// let listaNumeros:number<number> = [76,34,98]; outra forma de declarar
let listaNumeros:number[] = [76,34,98];

enum Cor{ vermelho, azul, laranja }

let c:Cor =  Cor.azul;

console.log(c);
console.log(Cor[2]);

//
let aux:any;
aux = "teste";
aux = 2;
aux = [43,44];

//
let arrayAny:any[] = [43, "teste", { }];

function listaNomes(lista:string[]):void{
  console.log(lista);
}
