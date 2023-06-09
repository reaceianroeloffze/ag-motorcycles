// file for retrieving the catalogue.json file

// store the json file in a variable
const catalogueURL = '/data/catalogue.json';

// Use the fetch API to retrieve the json file &
// convert it into a js usable object
fetch(catalogueURL)
    .then((response) => {
        return response.json();
    })
    .then((jsonCatalogue) => {
        const catalogue = jsonCatalogue['motorbike-spares'];
        for (let i = 0; i < catalogue.length; i++) {

            // Create the section container for the catalogue items
            let section = document.createElement('section');
            section.classList.add('catalogue-info');


            // Create a heading element as the name of the catalogue item
            let productName = document.createElement('h3');
            productName.classList.add('catalogue-info__name');
            productName.textContent = catalogue[i].name;

            // Create an image element to display a picture of the item
            let productImage = document.createElement('img');
            productImage.classList.add('catalogue-info__image', 'site-img');
            productImage.setAttribute('src', catalogue[i].image);
            productImage.setAttribute('alt', catalogue[i].name);

            // Create a paragraph element to display the price of the item
            let price = document.createElement('p');
            price.classList.add('catalogue-info__price');
            price.textContent = catalogue[i].price;

            // Append all elemets to the catalogue info section
            section.appendChild(productName);
            section.appendChild(productImage);
            section.appendChild(price);

            // Get the container in the document in which
            // the catalogue will be placed and place the section inside it
            document.querySelector('.catalogue-container').appendChild(section);

        }
    })