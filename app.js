const body = document.querySelector("body");
fetch('https://pokeapi.co/api/v2/pokemon/meowth')
.then(response => {
    console.log(response)
    return response.json();
})
.then(data => {
    // console.log(data);
    // console.log(sprites);
    // console.log(profilePic);
    // console.log(pokeName);
    // console.log(height);
    // console.log(weight);
    // console.log(tailwhipMove);
    // console.log(type);
    let sprites = data.sprites;
    let profilePic = sprites.front_shiny;
    let pokeName = data.name;
    let height = data.height;
    let weight = data.weight;
    let moves = data.moves;
    let tailwhipMove = moves[7].move.name;
    let type = data.types[0].type.name;

    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '18rem';
    console.log(card);

    const image = document.createElement('img');
    image.src = profilePic;
    image.classList.add('card-img-top');
    image.alt = pokeName;
    console.log(image);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    console.log(cardBody);

    const cardTitle = document.createElement('card-title');
    cardTitle.textContent = pokeName.charAt(0).toUpperCase() + pokeName.slice(1);
    console.log(cardTitle);

    const cardWeight = document.createElement('p');
    const cardHeight = document.createElement('p');
    const cardMove = document.createElement('p');
    const cardType = document.createElement('p');

    cardWeight.classList.add('card-text');
    cardHeight.classList.add('card-text');
    cardMove.classList.add('card-text');
    cardType.classList.add('card-text');

    cardWeight.textContent = `Weight: ${weight}`;
    cardHeight.textContent = `Height: ${height}`;
    cardMove.textContent = `Move: ${tailwhipMove}`;
    cardType.textContent = `Type: ${type}`;

    
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardWeight);
    cardBody.appendChild(cardHeight);
    cardBody.appendChild(cardMove);
    cardBody.appendChild(cardType);
    

    card.appendChild(image);
    card.appendChild(cardBody);
    console.log(card);
    
    body.appendChild(card);
    

});

