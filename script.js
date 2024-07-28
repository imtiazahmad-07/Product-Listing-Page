let productDiv =  document.querySelector(".product")
let displayproduct= async ()=>{
    productDiv.innerHTML = "";
    let product = await fetch("https://fakestoreapi.com/products");
    let finalproduct = await product.json();
    finalproduct.forEach(element => {
        productDiv.innerHTML += ` <div class="productItems">
                <img src="${element.image}" alt="">
                <h4>${element.category}</h4>
                <p>Price Rs ${element.price} | ${element.rating["rate"]}</p>
                <h3>
                    ${element.title}
                </h3>
            </div>`
    });
}

displayproduct();