function renderDod(breed, imgUrl) {
    return `
        <div class= "col-4 mb-4"> 
            <h3 class="text-center border border-primary rounded">${breed}</h3>
            <img class = "col-12 w-100 h-50" src="${imgUrl} " alt="" />
        </div>
    `
}

const dogsContainer = document.getElementById('dogs');

//get all the breeds 
// $.get()
$.get('https://dog.ceo/api/breeds/list', function (data) {
    console.log(data.message);
    const breeds = data.message;

    //for each breed, get a random image and add a card

    breeds.forEach((breed) => {
        $.get(`https://dog.ceo/api/breed/${breed}/images/random`).then((data) => {
            const html = renderDod(breed, data.message);
            dogsContainer.innerHTML += html;
        });
    });
});