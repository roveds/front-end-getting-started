var gabi = {
    nome: "Lais",
    sobrenome: 'Lodi',
    idade: 30,
    sexo: 'F',
    hobbies: ['jogar', 'comer'],
    cabelo: {
        comprimento: 'curto',
        cor: 'preto',
        estilo: 'cacheado'
    },
    falaNome: function() {
        console.log('Meu nome é ' + this.nome + ' e tenho ' + this.idade)
    }
};
gabi.cabelo.cor

gabi.sobrenome = 'Dias';

console.log('Nome da pessoa', gabi.nome + ' ' + gabi.sobrenome);

gabi.falaNome();

var listaDeNomes = [gabi, {
    nome: "Gabriel",
    sobrenome: 'Dias',
    idade: 28,
    sexo: 'M',
    falaNome: function() {
        console.log('Meu nome é ' + this.nome + ' e tenho ' + this.idade)
    }
}, {
    nome: "Gabrielle",
    sobrenome: 'Silva',
    idade: 16,
    sexo: 'F',
    falaNome: function() {
        console.log('Meu nome é ' + this.nome + ' e tenho ' + this.idade)
    }
}, {
    nome: "Arthur",
    sobrenome: 'Roveda',
    idade: 28,
    sexo: 'M',
    falaNome: function() {
        console.log('Meu nome é ' + this.nome + ' e tenho ' + this.idade)
    }
}];

console.log('Posição zero', listaDeNomes[0]); // Lais
console.log('Tamanho da lista', listaDeNomes.length); // 3

listaDeNomes.push({
    nome: "Angelita",
    sobrenome: 'de Souza',
    idade: 55,
    sexo: 'F',
    falaNome: function() {
        console.log('Meu nome é ' + this.nome + ' e tenho ' + this.idade)
    }
}); // ['Lais', 'Gabriel', 'Arthur', 'Angelita']
console.log('Lista depois de adicionar', listaDeNomes, listaDeNomes.length);

function filtraItems(item) {
    return item.nome.includes('thur');
}

console.log('Filtra os resultados da lista', listaDeNomes.filter(filtraItems))

listaDeNomes.splice(1,1);
console.log('Lista depois de remover', listaDeNomes, listaDeNomes.length);


function soma(numeroa, numerob) {
    return (numeroa + numerob) + ' é isso';
}

var resultado = soma(2, 4);

console.log('Resultado da soma', resultado);

//  (var index = 0; index < 10; index = index + 1)
for (var i = 0; i < listaDeNomes.length; i++) {
   console.log('<tr><td>' + listaDeNomes[i].nome +'</td><td>' + listaDeNomes[i].idade +'</td></tr');
   console.log(filtraItems(listaDeNomes[i]))
}

console.log('Terminou');