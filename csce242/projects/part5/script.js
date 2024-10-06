//hamburger menu
document.addEventListener('DOMContentLoaded',() =>{
    const hamburger = document.getElementById('hamburger-menu');
    const nav = document.getElementById('main-nav');

    hamburger.addEventListener('click',() =>{
        nav.classList.toggle('active');
    });
});

//slideshow images
const slide = () => {
    const currentImage = document.querySelector("#slideshow img.active");
    let nextImage = currentImage.nextElementSibling;

    // reached the end of the list
    if (nextImage === null) {
        nextImage = document.querySelector("#slideshow img:first-child");
    }

    currentImage.classList.remove("active");
    nextImage.classList.add("active");
}

setInterval(slide, 4000);

//Modal Feature

document.addEventListener("DOMContentLoaded", ()=>{
    const modal = document.getElementById("info-modal");
    const closeBtn = document.querySelector(".close-btn");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalImage = document.getElementById("modal-image");
    const modalLink = document.getElementById("modal-link");

    //array of data for each modal box
    //used some code from class example, assignment 9, and assignment 8 with some help from W3 schools
    const infoData = {
        "Heritage Line Ylang Cruise":{
            title: "Heritage Line Ylang Cruise", 
            description: "Discover the stunning waters and limestone karsts of Ha Long Bay abord the luxurious Heritage Ylang Cruise." ,
            link: "https://www.booking.com/hotel/vn/heritage-line-ylang-cruise.en.html?aid=311088;label=heritage-line-ylang-cruise-HJC*pVr8dCXf*dNHbdDzcQS471123861077:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-838698951485:lp9198699:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YWWnhi-6waeFeS7C9yEvV_4;ws=&gclid=Cj0KCQjw6oi4BhD1ARIsAL6pox2ZV1z9ldr9Q9vIqh_1uDr3d_i0qbXhn6yK2UtTcxHHaVBBCMx1ewoaAp7dEALw_wcB"
        },
        "The Marble Mountains":{
            title: "The Marble Mountains",
            description: "A group of five limestone hills located in Da Nang, known for their beautiful caves and Buddhist sanctuaries.",
            link: "https://www.tripadvisor.com/Attraction_Review-g298085-d454980-Reviews-The_Marble_Mountains-Da_Nang.html"
        },
        "The Old Quarter":{
            title:"The Old Quarter",
            description: "Explore the bustling streets of Hanoi\'s Old Quarter, filled with history, traditional shops, and vibrant street life.",
            link: "https://vietnam.travel/things-to-do/explore-old-quarter-your-way"
        },
        "Cat Ba Island":{
            title: "Cat Ba Iland",
            description: "Cat Ba Island is the largest island in the Ha Long Bay archipelago, known for its rugged limestone hills and diverse wildlife.",
            link: "https://www.tripadvisor.com/Attraction_Review-g737051-d386683-Reviews-Cat_Ba_Island-Cat_Ba_Hai_Phong.html"
        },
        "Ho Chi Minh City":{
            title: 'Ho Chi Minh City',
            description: "Ho Chi Minh City, formerly known as Saigon, is a bustling city with rich history and vibrant culture.",
            link: "https://www.tripadvisor.com/Tourism-g293925-Ho_Chi_Minh_City-Vacations.html"
        },
        "Saigon":{
            title: "Saigon",
            description: "Explore the historic streets of Saigon, known for its French colonial architecture and vibrant culture.",
            link: "https://vietnam.travel/places-to-go/southern-vietnam/ho-chi-minh-city"
        },
        "Hanoi":{
            title: "Hanoi",
            description: "The capital of Vietnam, Hanoi, is known for its centuries-old architecture and rich culture influenced by Southeast Asia.",
            link: "https://www.tripadvisor.com/Tourism-g293924-Hanoi-Vacations.html"
        },
        "Hạ Long Bay": {
            title: "Hạ Long Bay",
            description: "Hạ Long Bay is famous for its emerald waters and thousands of towering limestone islands topped with rainforests.",
            link: "https://whc.unesco.org/en/list/672/"
        },
        "Bánh mì": {
            title: "Bánh mì",
            description: "A popular street food, Bánh mì is a Vietnamese sandwich filled with a variety of meats, vegetables, and herbs.",
            link: "https://vietnamnomad.com/eat-drink/banh-mi/#:~:text=The%20Merriam%2DWebster%20dictionary%20defines,with%20cilantro%20and%20often%20cucumbers.%E2%80%9D"
        },
        "Phở": {
            title: "Phở",
            description: "Phở is a Vietnamese soup consisting of broth, rice noodles, herbs, and meat, usually beef or chicken.",
            link: "https://vietnamnomad.com/eat-drink/pho/"
        },
        "Bún bò Huế": {
            title: "Bún bò Huế",
            description: "Bún bò Huế is a Vietnamese soup with a lemongrass-flavored broth, beef, and noodles.",
            link: "https://vietnamnomad.com/eat-drink/bun-bo-hue/"
        },
        "Bún thịt nướng": {
            title: "Bún thịt nướng",
            description: "Bún thịt nướng is a Vietnamese dish consisting of grilled pork and vermicelli noodles, often served with fresh vegetables.",
            link: "https://www.hungryhuy.com/bun-thit-nuong-recipe-vietnamese-grilled-bbq-pork-with-rice-vermicelli-vegetables/"
        }
    };

    //Click
    document.querySelectorAll('.cruise, .hcmcity, .saigon, .hanoi, .hlbay, .banhmi, .pho, .bbh, .btn').forEach(box => {
        box.addEventListener('click', () => {
            const title = box.querySelector('h3').innerText;
            const imgSrc = box.querySelector('img').src;
    
          // Add modal with data
            modalTitle.innerText = infoData[title].title;
            modalDescription.innerText = infoData[title].description;
            modalImage.src = imgSrc;
            modalLink.href = infoData[title].link;  // Set the href for the modal link
            modal.style.display = 'flex'; // Show modal
            });
        });
    
        // Close modal 
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        
        // Close modal
        window.addEventListener('click', event => {
            if (event.target === modal) {
            modal.style.display = 'none';
            }
    });

});