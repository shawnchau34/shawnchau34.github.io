document.getElementById("search-button").addEventListener("click", async () => {
    const query = document.getElementById('cocktail-input').value.trim();
    if (query) {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            displayCocktails(data.drinks);
        } catch (error) {
            console.error(error);
        }
    }
});

function displayCocktails(drinks) {
    const cocktailDetails = document.getElementById("cocktail-details");
    cocktailDetails.innerHTML = ''; 

    if (!drinks) {
        cocktailDetails.innerHTML = "<p>No cocktails found. Try another name.</p>";
        return;
    }

    drinks.forEach(drink => {
        const card = document.createElement("div");
        card.className = "cocktail-card";

        const img = document.createElement("img");
        img.src = drink.strDrinkThumb;
        img.alt = drink.strDrink;

        const title = document.createElement("h2");
        title.textContent = drink.strDrink;

        const instructions = document.createElement("p");
        instructions.textContent = drink.strInstructions;

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(instructions);

        cocktailDetails.appendChild(card);
    });
}
