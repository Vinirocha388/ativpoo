class Carro {
  constructor(modelo, cor, placa, ano, combustível, apelido) {
    this.modelo = modelo;
    this.cor = cor;
    this.placa = placa;
    this.ano = ano;
    this.combustível = combustível;
    this.apelido = apelido;
  }

  descricao() {
    console.log(
      `Minha caranga é do modelo: ${this.modelo}, do ano ${this.ano}, da cor ${this.cor}, minha placa é ${this.placa} e meu carro bebe ${this.combustível}`
    );
  }

  buzinar() {
    console.log(`O ${this.apelido} está buzinando: Beep Beep!`);
  }
}

const carro1 = new Carro(
  "Camaro",
  "Amarelo",
  "GDS-8490",
  "2014",
  "gasolina",
  "Camarinho"
);
const carro2 = new Carro(
  "Fusca",
  "Azul",
  "BRA-8G10",
  "1970",
  "gasolina",
  "Fusção"
);
const carro3 = new Carro(
  "Gol",
  "chumbo",
  "GDE-2Y36",
  "2010",
  "etanol",
  "Golzinh"
);
carro1.descricao();
carro1.buzinar();

carro3.descricao();
carro3.buzinar();































