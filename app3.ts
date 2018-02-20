

class Veiculo{
  constructor(private titulo:string){
    this.titulo = titulo;
  }
  getTitulo():string{
    return this.titulo;
  }
}

let camaro:Veiculo = new Veiculo('Camaro');

console.log(camaro.getTitulo());


// Other comments
