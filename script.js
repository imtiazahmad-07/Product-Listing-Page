let productDiv =  document.querySelector(".product")
let CategoryListDiv = document.querySelector(".CategoryList")

let displayproduct= async ()=>{
    productDiv.innerHTML = "";
    CategoryListDiv.innerHTML=""
    let allCat = [];
    let product = await fetch("https://fakestoreapi.com/products");
    let finalproduct = await product.json();
    finalproduct.forEach(element => {

        if(!allCat.includes(element.category)){
                 CategoryListDiv.innerHTML += `<label for="">
                                            <input type="checkbox">${element.category}
                                      </label>`
                allCat.push(element.category)
        }


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