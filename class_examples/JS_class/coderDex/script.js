var currentUserName = document.querySelector('#currentUserName')
var cardsContainer = document.querySelector('#cardsContainer')

function makeCoderCard(data) {
  var card =
`<div class="card flexed">
  <img class="profile-pic" src="${data.avatar_url}" alt="${data.login}">
  <div class="card-content">
    <h1>${data.name}</h1>
    <h2>${data.location}</h2>
  </div>
</div>`
  return card
}

async function search(){
  console.log(currentUserName.value)
  var response = await fetch(`https://api.github.com/users/${currentUserName.value}`)
  var coderData = await response.json()
  console.log(coderData)
  cardsContainer.innerHTML += makeCoderCard(coderData)
}