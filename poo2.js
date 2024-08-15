const pessoa = {    
    primeiroNome: 'Vinícius',
    ultimoNome: 'Rocha',
    idade: 16,
    corOlho: 'Castanho',
    altura: 175,
    dataNascimento: '26/12/2007',
    usaOculos: false,
    corPele: 'Pardo',
    corFavorita: 'Preto',
    sexo: 'Masculino'
};

//Primeira frase
console.log('1- O ' + pessoa.primeiroNome + ' ' + pessoa.ultimoNome +  ' tem ' +  pessoa.idade +  ' anos!');

//Alterar objeto
pessoa.ultimoNome = 'Alexandro';
console.log('2- O ' + pessoa.primeiroNome + ' ' + pessoa.ultimoNome +  ' tem ' +  pessoa.idade +  ' anos!');