function displayPenProducts(products) {
    const penContainer = document.createElement('div');
    penContainer.classList.add('pen-container');

    const penTitle = document.createElement('h4');
    penTitle.textContent = 'Pens';
    penContainer.appendChild(penTitle);

    products.forEach(product => {
        if (product.title.toLowerCase() === 'pens') {
            const penDiv = document.createElement('div');
            penDiv.classList.add('product');

            penDiv.innerHTML = `
                <div class="top d-flex">
                    <img src="${product.url}" alt="${product.title}" />
                    <div class="icon d-flex">
                    </div>
                </div>
                <div class="bottom">
                    <h4>${product.title}</h4>
                    <div class="d-flex">
                        <div class="price">KES ${product.price}</div>
                    </div>
                </div>
            `;

            penContainer.appendChild(penDiv);
        }
    });

    return penContainer;
}
function filterProducts(category) {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = ''; // Clear the container

    const filteredProducts = products.filter(product => product.category === category);

    const penProducts = filteredProducts.filter(product => product.title.toLowerCase() === 'pens');
    const otherProducts = filteredProducts.filter(product => product.title.toLowerCase() !== 'pens');

    if (otherProducts.length > 0) {
        otherProducts.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');

            productDiv.innerHTML = `
                <div class="top d-flex">
                    <img src="${product.url}" alt="${product.title}" />
                    <div class="icon d-flex">
                    </div>
                </div>
                <div class="bottom">
                    <h4>${product.title}</h4>
                    <div class="d-flex">
                        <div class="price">KES ${product.price}</div>
                    </div>
                </div>
            `;

            productsContainer.appendChild(productDiv);
        });
    }

    if (penProducts.length > 0) {
        const penContainer = displayPenProducts(penProducts);
        productsContainer.appendChild(penContainer);
    }
}