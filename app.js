//https://rickandmortyapi.com/api/character/2  - 826 chars

const displayDOM = document.querySelector('#display');

function getRandomChar(){
  const randNum = Math.floor(Math.random()*826)
  apiRequest(randNum)
}


function apiRequest(num){
  fetch(`https://rickandmortyapi.com/api/character/${num}`)
.then(res=> res.json()) 
.then(data => {
    displayDOM.innerHTML = `
    <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${data.image}" alt="Morty not found!">
  <div class="card-body text-center">
    <h6>Name:</h6>
    <h2 class="card-title">${data.name}</h2>
    <h6>Species:</h6>
    <h3 class="card-title">${data.species}</h3>
    <h6>Location:</h6>
    <h5 class="card-title">${data.location.name}</h5>
  </div>
</div>
<div class = "center pt-3">
<a href="#" class="btn btn-success" onClick = "getRandomChar()" >Find Another Character</a>
</div>
`
})
.catch(err=>{

})
}



fetch(`https://rickandmortyapi.com/api/character/8`)
.then(res=> res.json()) 
.then(data => {
    displayDOM.innerHTML = `
    <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${data.image}" alt="Morty not found!">
  <div class="card-body text-center">
    <h6>Name:</h6>
    <h2 class="card-title">${data.name}</h2>
    <h6>Species:</h6>
    <h3 class="card-title">${data.species}</h3>
    <h6>Location:</h6>
    <h5 class="card-title">${data.location.name}</h5>
  </div>
</div>
<div class = "center pt-3">
<a href="#" class="btn btn-success" onClick = "getRandomChar()" >Find Another Character</a>
</div>
`
})
.catch(err=>{

})


