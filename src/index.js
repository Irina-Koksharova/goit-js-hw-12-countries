import './css/styles.css';
import '../node_modules/modern-normalize/modern-normalize.css';
import debounce from 'lodash';
import markupList from './templates/countries-list.hbs';
import markupCard from './templates/country-card.hbs';

const refs = {
    searchForm: document.querySelector('.js-search-form'),
    resultForm: document.querySelector('.js-result-form')
}

refs.searchForm.addEventListener('input', _.debounce(fetchCountry, 500));

function fetchCountry(e) {
    fetch(`https://restcountries.eu/rest/v2/name/${e.target.value}?fields=name;capital;population;languages;flag`)
        .then(response => {
         return response.json()
        }).then(renderCountriesListMarkup)
}

function renderCountriesListMarkup(countries) {
    const countriesList = markupList(countries);
    refs.resultForm.insertAdjacentHTML("afterbegin", countriesList)
}

// function renderCountryCardMarkup(country) {
//     const countryCard = markupCard(country);
//     refs.resultForm.insertAdjacentHTML("afterbegin", countryCard)
// }



