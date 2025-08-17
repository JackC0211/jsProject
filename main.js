

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// 	.then((response) => {

// 		if(!response.ok){
// 			throw new Error("Could not fetch resource");
// 		}
// 		return response.json()

// 	})
// 	.then(data => {
// 		const container = document.getElementById("pokemon");
// 		container.innerHTML = `
// 		<p>ID: ${data.id}</p>
// 		<p>Name: ${data.name}</p>
// 		`;
// 	})
// 	.catch((error) => console.error(error));


async function fetchData(){

	try{
		const pokename = document.getElementById("pokemonName").value.toLowerCase();
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`) 

		if(!response.ok){
			throw new Error("Could not fetch resource")
		}

		const data = await response.json()
		const pokemonSprite = data.sprites.front_shiny;
		const imgElement = document.getElementById("pokemonSprite")
		imgElement.src = pokemonSprite;
		imgElement.style.display = "block";

	}
	catch(error){
		console.error(error)
	}
}