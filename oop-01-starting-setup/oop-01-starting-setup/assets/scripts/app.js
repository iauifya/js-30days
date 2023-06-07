class Product {
    title = 'DEFAULT';
    imageUrl;
    price;
    description;

    constructor(title, image, price, desc) {
        this.title = title;
        this.imageUrl = image;
        this.price = price;
        this.description = desc;
    }
}
class ProductItem {
    constructor(product) {
        this.product = product;
    }

    render() {
        const prodEl = document.createElement('li');
        prodEl.className = 'product-item';
        prodEl.innerHTML = `
                <div>
                    <img src="${this.product.imageUrl}" alt="this.product.title">
                    <div class="product-item__content">
                        <h2>${this.product.title}</h2>
                        <h3>\$${this.product.price}</h3>
                        <p>${this.product.description}</p>
                        <button>Add to Cart</button>
                    </div>
                </div>  
            `;
        return prodEl;
    }
}
class ProductList {
    products = [
        new Product(
            'A Pillow',
            'https://www.u-buy.com.tw/productimg/?image=aHR0cHM6Ly9pNS53YWxtYXJ0aW1hZ2VzLmNvbS9hc3IvMDYxYmRjOTgtNWUyYy00YTAwLTk4ZGQtMWFhMWY0YjgyZmY2XzEuMzA4NjgxNzkxNzE2NGM1YzI5ZDYxZTYyODU4OWVjNTEuanBlZw.jpg',
            799,
            'A soft pillow'
        ),
        new Product(
            'A Carpet',
            'https://www.flooringamerica.com/root/clientImages/MF7979web/empty-big-188.jpg',
            2999,
            'A soft carpet'
        ),
    ];

    constructor() {}
    render() {
        const renderHook = document.querySelector('#app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.products) {
            const productItem = new ProductItem(prod);
            const prodEl = productItem.render();
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
}
const productList = new ProductList();
productList.render();
// console.log(productList);