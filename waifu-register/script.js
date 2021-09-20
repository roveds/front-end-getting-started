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

function clearForm() {
    document.getElementsByName('id')[0].value = '';
    document.getElementsByName('name')[0].value = '';
    document.getElementsByName('year')[0].value = '';
    Array.from(document.getElementsByName('category')).forEach((input) => input.checked = false);
    // let categories = Array.from(document.getElementsByName('category'))
    // for (let i = 0; i < categories.length; i++) {
    //     categories[i].checked = false;
    // }
}

function deleteRow(id) {
    // let i = animeList.findIndex((anime) => anime.id == id);
    // animeList.splice(i, 1);

    // for (let i = 0; i < animeList.length; i++) {
    //     if (animeList[i].id == id) {
    //         animeList.splice(i, 1);
    //     }
    // }

    animeList = animeList.filter((anime) => anime.id !== id);
    
    // animeList.splice(index, 1);
    updateAnimeTable();
}

function editRow(id) {
    clearForm()
    for (let i = 0; i < animeList.length; i++) {
        let anime = animeList[i];
        if (anime.id == id) {
            let idInput = document.getElementsByName('id')[0];
            let nameInput = document.getElementsByName('name')[0];
            let yearInput = document.getElementsByName('year')[0];
            let categoryInput = Array.from(document.getElementsByName('category'));
            nameInput.value = anime.name;
            yearInput.value = anime.year;
            idInput.value = anime.id;

            // for (let j = 0; j < categoryInput.length; j++) {
            //     const input = categoryInput[j];
            //     if (anime.category.includes(input.value)) {
            //         input.checked = true;
            //     }
            // }
            categoryInput
                .filter((input) => anime.category.includes(input.value))
                .forEach((input) => input.checked = true)
        }
    }
}

function submitEditAnime() {
    let idInput = document.getElementsByName('id')[0];
    let nameInput = document.getElementsByName('name')[0];
    let yearInput = document.getElementsByName('year')[0];
    let categoryInput = Array.from(document.getElementsByName('category'));
    let categories = categoryInput
        .filter((input) => input.checked)
        .map ((input) => input.value);
    let nameDuplicated = false;

    animeList.forEach((anime) => {
        if (nameInput.value.toUpperCase() == anime.name.toUpperCase() && idInput.value != anime.id) {
            nameDuplicated = true;
        }
    });
        
    if (nameInput.value == '' || yearInput.value == '') {
        alert('Preencha todos os campos!');
    } else if (nameDuplicated) {
        alert('Este anime já está cadastrado!');
    } else if (parseInt(yearInput.value) == NaN
        || parseInt(yearInput.value) < 1958
        || parseInt(yearInput.value) > new Date().getFullYear() + 5
    ) {
        alert('Coloque um ano válido! O ano deve ser entre 1958 a ' + (new Date().getFullYear() + 5));
    } else if (categories.length == 0) {
        alert('Selecione ao menos uma categoria!');
    } else {
        let anime = animeList.find((anime) => anime.id == idInput.value);
        anime.name = nameInput.value;
        anime.year = parseInt(yearInput.value);
        anime.category = categories;
        clearForm();
    }
}

function submitCreateAnime() {
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
        if(nameInput.value.toUpperCase() == anime.name.toUpperCase()) {
            nameDuplicated = true
        }
    });
    // verificar se o nome digitado no campo é igual a algum nome do item da lista
    // se for igual trocar a variavel para true

    // treinar lógicas booleanas*

    if(nameDuplicated) {
        alert('Este anime já está cadastrado!');
    } else if (nameInput.value == '' || yearInput.value == '') {
        alert('Preencha todos os campos!');
    } else if (parseInt(yearInput.value) == NaN
        || parseInt(yearInput.value) < 1958
        || parseInt(yearInput.value) > new Date().getFullYear() + 5
    ) {
        alert('Coloque um ano válido! O ano deve ser entre 1958 a ' + (new Date().getFullYear() + 5));
    } else if (categories.length == 0) {
        alert('Selecione ao menos uma categoria!');
    } else {
        let anime = {
            id: idSequence++,
            name: nameInput.value,
            year: yearInput.value,
            category: categories
        }

        animeList.push(anime);
        clearForm();
    }

}

function submitAnime(e) {
    let id = document.getElementsByName('id')[0];

    e.preventDefault();
    if (id.value == '') {
        submitCreateAnime();
    } else {
        submitEditAnime();
    }
    updateAnimeTable()
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
        + '<td>'
        + '<i class="icon edit_icon" onclick="editRow(' + anime.id + ')"/></i>'
        + '<i class="icon delete_icon" onclick="deleteRow(' + anime.id + ')"></i>'
        + '</td>'
        '</tr>';

        tableRowsHtml += row; 
    }

    animeTableTbody.innerHTML = tableRowsHtml;
}

updateAnimeTable();