function fetchCountries(searchQuery) {
    const url = `https://restcountries.eu/rest/v2/name/${searchQuery}?fields=name;capital;population;languages;flag`;
    return fetch(url)
        .then(response)
        .then(json)
}

function response(response) {
    if (response.status !== 200) {
      return Promise.reject(new Error(response.statusText))
    };
    return Promise.resolve(response)
}

function json(response) {
    return response.json();
}

export default fetchCountries;