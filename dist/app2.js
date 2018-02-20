var nome = "Ana";
var Idade = 19;
var eMaior;
//
if (Idade > 17) {
    eMaior = true;
}
else {
    eMaior = false;
}
var lista = ["verde", "azul"];
// let listaNumeros:number<number> = [76,34,98]; outra forma de declarar
var listaNumeros = [76, 34, 98];
var Cor;
(function (Cor) {
    Cor[Cor["vermelho"] = 0] = "vermelho";
    Cor[Cor["azul"] = 1] = "azul";
    Cor[Cor["laranja"] = 2] = "laranja";
})(Cor || (Cor = {}));
var c = Cor.azul;
console.log(c);
console.log(Cor[2]);
//
var aux;
aux = "teste";
aux = 2;
aux = [43, 44];
//
var arrayAny = [43, "teste", {}];
function listaNomes(lista) {
    console.log(lista);
}
