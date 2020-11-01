import markupList from '../templates/countries-list.hbs';
import markupCard from '../templates/country-card.hbs';
import { refs } from '../index.js';
import fetchCountries from './fetch-countries.js';
import { myNotice, myError } from './notification.js';

function renderMarkup(event) {
    const searchQuery = event.target.value;
       
    fetchCountries(searchQuery)
    .then(data => {
        if (data.length === 1) {
            renderCountryCardMarkup(data)
        } else if (data.length > 1 && data.length <= 10) {
            renderCountriesListMarkup(data);
        } else if (data.length > 10) {
            refs.resultForm.innerHTML = ''; 
            myNotice();
        }
    })
    .catch(error => {
        myError();
        refs.searchForm.value = '';
        refs.resultForm.innerHTML = ''; 
    })       
}

function renderCountriesListMarkup(countries) {
    refs.resultForm.innerHTML = ''; 
    const countriesList = markupList(countries);
    refs.resultForm.insertAdjacentHTML("afterbegin", countriesList)
}

function renderCountryCardMarkup(country) {
    refs.resultForm.innerHTML = ''; 
    const countryCard = markupCard(country);
    refs.resultForm.insertAdjacentHTML("afterbegin", countryCard)
}

export { renderMarkup };