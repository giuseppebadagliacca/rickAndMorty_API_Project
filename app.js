//https://rickandmortyapi.com/api/character/2  - 826 chars

const displayDOM = document.querySelector('#display');

fetch(`https://rickandmortyapi.com/api/character/98`)
.then(res=> res.json()) 
.then(data => {
    console.log(data)
    // console.log(data.name)
    // console.log(data.image)
    // console.log(data.species)
    console.log(data.location.name)
    displayDOM.innerHTML = `
    <h2>${data.name}</h2>
    <h3>${data.species}</h3>
    <h4>${data.location.name}</h4>
    <img src="${data.image}" alt="Morty not found!">
    `
})
.catch(err=>{

})