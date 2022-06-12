/*
 * - HTTP-запросы в браузере
 *  - Fetch API
 *  - Владка Network
 *  - HTTP-методы
 *  - Заголовки
 *  - MIME-типы
 *  - Параметры запроса
 * - Документация REST API
 * - Обработка 404 с fetch
 * - Аутентификация
 * - Библиотеки-обёртки
 * - https://pokeapi.co/
 */
 

import '../css/common.css'
import pokemonCardTpl from '../templates/pokemon-card.hbs'
import API from './api-service'
import getRefs from './get-refs'

const refs = getRefs()

refs.searchForm.addEventListener('submit', onSearch)

function onSearch(e) {
    e.preventDefault()

    const form = e.currentTarget;
    const searchQuerry = form.elements.query.value
     
    
    API.fetchPokemonById(searchQuerry)
    .then(renderPocemonCard)
    .catch(onFetchError)
    .finally(() => form.reset())
}

 function onFetchError() {
    alert('NO POKEMON')
 }



  function renderPocemonCard(pokemon) {
    const markup = pokemonCardTpl(pokemon)
    refs.cardContainer.innerHTML = markup 
  }


  fetch('https://pixabay.com/api/?key=27897235-d7c53493320d0870f17cf5746&q=cat&image_type=photo&orientation=vertical')
  .then(r => r.json())
  .then(console.log)