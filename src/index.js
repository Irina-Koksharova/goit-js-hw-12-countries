import './css/styles.css';
import '../node_modules/modern-normalize/modern-normalize.css';
import debounce from 'lodash';
import { renderMarkup } from './js/markup.js';

const refs = {
    searchForm: document.querySelector('.js-search-form'),
    resultForm: document.querySelector('.js-result-form')
}

refs.searchForm.addEventListener('input', _.debounce(renderMarkup, 500));

export { refs };





