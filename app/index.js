import './index.scss';

// images
import enginakyurt from "./assets/images/6.jpg";
import quangVietNguyen from "./assets/images/7.jpg";
import yaazhini from "./assets/images/5.jpg";

document.addEventListener("DOMContentLoaded", () => {

    const productsContainer = document.getElementById('products');

    const products = [
        {
            name: 'Fujfilm Camera',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: enginakyurt
        },
        {
            name: 'Canon Camera',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: quangVietNguyen
        },
        {
            name: 'Nikon Camera',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: yaazhini
        },
        { image: "assets/images/product1.jpg", title: "Product 1", description: "A short description of product 1.", price: "$10.99" },
        { image: "assets/images/product2.jpg", title: "Product 2", description: "A short description of product 2.", price: "$12.99" },
        { image: "assets/images/product3.jpg", title: "Product 3", description: "A short description of product 3.", price: "$8.99" },
        { image: "assets/images/product4.jpg", title: "Product 4", description: "A short description of product 4.", price: "$15.99" },
        { image: "assets/images/product5.jpg", title: "Product 5", description: "A short description of product 5.", price: "$9.49" },
        { image: "assets/images/product6.jpg", title: "Product 6", description: "A short description of product 6.", price: "$14.29" },
        { image: "assets/images/product7.jpg", title: "Product 7", description: "A short description of product 7.", price: "$19.99" },
        { image: "assets/images/product8.jpg", title: "Product 8", description: "A short description of product 8.", price: "$7.99" },
        { image: "assets/images/product9.jpg", title: "Product 9", description: "A short description of product 9.", price: "$22.49" },
        { image: "assets/images/product10.jpg", title: "Product 10", description: "A short description of product 10.", price: "$17.99" },
        { image: "assets/images/product11.jpg", title: "Product 11", description: "A short description of product 11.", price: "$11.49" },
        { image: "assets/images/product12.jpg", title: "Product 12", description: "A short description of product 12.", price: "$6.99" }
    ];

    products.forEach(product => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        
        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.src = product.image;
        img.alt = product.name;
        img.style.maxWidth = '100%'; 
        img.style.maxHeight = '200px';
        img.style.objectFit = 'cover'

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const title = document.createElement('h4');
        title.classList.add('card-title');
        title.textContent = product.name;

        const description = document.createElement('p');
        description.classList.add('card-text');
        description.textContent = product.description;

        const addToCart = document.createElement('button');
        addToCart.classList.add('btn');
        addToCart.classList.add('btn-success');
        addToCart.classList.add('float-end');
        addToCart.textContent = "Add to cart";

        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(addToCart);
        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBody);

        productsContainer.appendChild(cardDiv);
    });
});