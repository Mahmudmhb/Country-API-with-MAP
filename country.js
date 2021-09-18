const loadCountris = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => loadData(data))
}
const loadData = country => {
    console.log(country)
    const container = document.getElementById('container')
    const loadHTML = country.map(countrise => loadHTMLData(countrise))
    console.log(loadHTML[0])
    container.innerHTML = loadHTML.join(' ');

}
const loadHTMLData = countrise => {
    return `
    
       <div class="country">
       <img src="${countrise.flag}">
       <h1>${countrise.name}</h1>
       <h4>Captial:${countrise.capital}</h4>
      
       </div>
    `
}
loadCountris()