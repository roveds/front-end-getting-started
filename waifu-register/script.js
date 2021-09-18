//  logica booleana
// if (!estaChovendo && !estaNevando) { // inverso
// if (!(!estaChovendo && !estaNevando)) {
// if (!(estaChovendo && !tenhoCarro)) {
// || se alguem for verdade, então verdade
// && se alguem for falso, então falso
//              2 + 2 * 2
//              !estaChovendo || tenhoCarro && temGasolina;
//              true          ||   false    && true
//
//              (tenhoCarro && temGasolina) || !estaChovendo;
//              true       &&    true    || false
//                        !tenhoCarro && (estaChovendo || estaNevando);
//                        false       && true         || false;
// 
//                        (estaNevando || estaChovendo) && !tenhoCarro;
//                        true        || false        && false;
//                        estaNevando || estaChovendo   clima esta ruim
//                        true || false
//             ERRADO     !estaNevando || !estaChovendo  clima esta bom
//                        !estaNevando && !estaChovendo  clima esta bom
//                        !(estaNevando || estaChovendo)  clima esta bom
//                        !(false || false) clima esta bom
//                        !(true || false) clima esta bom
//                        !false || true clima esta bom


// let categorias = ['Hentai', 'Adventure', 'Romance']
// let isAdult = categorias.includes('Hentai');
// if (isAdult) {
//     console.log('Esse anime é adulto')
// }

// { name: 'arthur'}
// let pessoa = { name: 'arthur'};
// console.log({ name: 'arthur'})

let animeList = [{
    id: 1,
    name: 'Naruto',
    year: 2002,
    category: ['adventure', 'action']
},{
    id: 2,
    name: 'Bleach',
    year: 2004,
    category: ['action', 'comedy']
}];
let idSequence = animeList.length + 1;

function deleteRow(id) {
    // let i = animeList.findIndex((anime) => anime.id == id);
    // animeList.splice(i, 1);

    for (let i = 0; i < animeList.length; i++) {
        if (animeList[i].id == id) {
            animeList.splice(i, 1);
        }
    }
    // animeList.splice(index, 1);
    updateAnimeTable();
}

function submitAnime(e) {
    e.preventDefault();

    let nameInput = document.getElementsByName('name')[0];
    let yearInput = document.getElementsByName('year')[0];
    let categoryInput = Array.from(document.getElementsByName('category'));

    // let categories = [];
    // for(let i = 0; i < categoryInput.length; i++) {
    //     let input = categoryInput[i];
    //     if (input.checked) {
    //         categories.push(input.value);
    //     }
    // } 

    // let categories = categoryInput
    //     .filter((input) => input.checked)
    //     .map((input) => input.value)
    
    let categories = categoryInput // [input, input, input, input]
    .filter(function(input) {
        return input.checked;
    })
    .map(function(input) {
        return input.value;
    })

    let nameDuplicated = false;

    animeList.forEach((anime) => { // passar por todos os itens da lista
        if(nameInput.value == anime.name) {
            nameDuplicated = true
        }
    });
    // verificar se o nome digitado no campo é igual a algum nome do item da lista
    // se for igual trocar a variavel para true

    // treinar lógicas booleanas*

    if(nameDuplicated) {
        alert('Este anime já está cadastrado!');
        document.getElementsByTagName('label')[0].style.color='red';
    } else if(parseInt(yearInput.value) == NaN
        || parseInt(yearInput.value) < 1958
        || parseInt(yearInput.value) > new Date().getFullYear() + 5
    ) {
        alert('Coloque um ano válido! O ano deve ser entre 1958 a ' + (new Date().getFullYear() + 5));
    } else if(categories.length == 0) {
        alert('Selecione ao menos uma categoria!');
    } else if(nameInput.value == '' || yearInput.value == '') {
        alert('Preencha todos os campos!');
    } else {
        let anime = {
            id: idSequence++,
            name: nameInput.value,
            year: yearInput.value,
            category: categories
        }

        animeList.push(anime);
        updateAnimeTable();

        document.getElementsByTagName('label')[0].style.removeProperty('color');
    }
}

function updateAnimeTable() {
    let animeTableTbody = document
        .getElementById('anime_table')
        .getElementsByTagName('tbody')[0];

    let tableRowsHtml ='';

    for (let i = 0; i < animeList.length; i++) {
        let anime = animeList[i];
        let row =
        '<tr>'
        // + '<td>' + anime.id + '</td>'
        + '<td>' + anime.name + '</td>'
        + '<td>' + anime.year + '</td>'
        + '<td>' + anime.category + '</td>'
        + '<td><img class="edit_icon"src="images/pencil_icon.svg" />'
        + '<span class="icon delete_icon" onclick="deleteRow(' + anime.id + ')"></span></td>'
        '</tr>';

        tableRowsHtml += row; 
    }

    animeTableTbody.innerHTML = tableRowsHtml;
}

updateAnimeTable();




let lista = ['a', 'b', 'c', 'd']

let valor = lista[2]

for (let i = 0; i < lista.length; i++) {
    let letra = lista[i]
}