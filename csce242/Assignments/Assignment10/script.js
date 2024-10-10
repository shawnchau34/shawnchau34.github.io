const getIceCream = async () => {
    const url = "https://portiaportia.github.io/json/ice-creams.json";

    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};

const showIceCreams = async () => {
    const iceCreams = await getIceCream();
    const container = document.getElementById("ice-cream-container");
    container.innerHTML = "";

    iceCreams.forEach(iceCream => {
        const card = document.createElement("div");
        card.classList.add("ice-cream-card");
        
        const img = document.createElement("img");
        img.src = `https://portiaportia.github.io/json/images/ice-creams/${iceCream.image}`;

        const overlay = document.createElement("div");
        overlay.classList.add("ice-cream-name");
        overlay.textContent = iceCream.name;

        card.appendChild(img);
        card.appendChild(overlay);
        container.appendChild(card);
    });
};

showIceCreams();
