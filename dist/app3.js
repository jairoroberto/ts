var Veiculo = /** @class */ (function () {
    function Veiculo(titulo) {
        this.titulo = titulo;
        this.titulo = titulo;
    }
    Veiculo.prototype.getTitulo = function () {
        return this.titulo;
    };
    return Veiculo;
}());
var camaro = new Veiculo('Camaro');
console.log(camaro.getTitulo());
