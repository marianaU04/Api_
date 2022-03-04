const API_URL = 'https://rickandmortyapi.com/api/character/?page=1'
const SEARCH_URL = 'https://rickandmortyapi.com/api/character/?page=1'

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');
const frag = document.createDocumentFragment();

const getPersonajes = async (url, busqueda) => {
    try {
        const res = await fetch(url)
        const data = await res.json()
        if (data.results.length === 0) {
            swal.fire({
                title: 'Error!',
                text: `No se ha encontrado nada referente a ${busqueda}`,
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
        } else {
            showPersonajes(data.results)
        }
    } catch (error) {
        swal.fire({
            title: 'Error!',
            text: error,
            icon: 'error',
            confirmButtonText: 'Aceptar'
        })
    }
}
getPersonajes(API_URL)

const showPersonajes = (personaje) => {
    main.innerHTML = ''
    personaje.forEach(personaje => {
        const { name, status, species, origin, image } = personaje
        const personajeDiv = document.createElement('div')
        personajeDiv.classList.add('personaje')
        personajeDiv.innerHTML = `
        <img src="${image}" alt="">
        <div class="movie-info">
            <h3>${name}</h3>
            <span class="green">${species}</span>
        </div>
        <div class="overview">
        <h3>Información</h3>
            <h3>${origin.name}</h3>
            <h2>${status}</h2>
        </div>
        `
        frag.appendChild(personajeDiv)
    });
    main.appendChild(frag)
    console.log(personaje);
}

form.addEventListener('submit', e=>{
    e.preventDefault()
    const searchTerm = search.Value.tolocaleLowerCase
    if(searchTerm && searchTerm !== ''){
        getMovies(SEARCH_URL + searchTerm, searchTerm)
        search.Value=''
    }else{
        swal.fire({
            title: 'Error!',
            text: 'error escriba algo',
            icon: 'error',
            confirmButtonText: 'aceptar'
        })
    }
})