let productDiv =  document.querySelector(".product")
let CategoryListDiv = document.querySelector(".CategoryList")


let displayproduct= async (allCheckCat=[])=>{
    productDiv.innerHTML = " ";
    console.log(allCheckCat)
    let allCat = [];        //an empty array
    let product = await fetch("https://fakestoreapi.com/products");
    let finalproduct = await product.json();        //20 Data elements
    finalproduct.forEach(element => {
        
        //Category Data
        if(!allCat.includes(element.category)){
                
                 CategoryListDiv.innerHTML += `<label>
                                            <input type="checkbox" onclick="categoryFilter()" value="${element.category}"> ${element.category}
                                      </label>`;
                allCat.push(element.category)
        }

        if(allCheckCat.length==0){
            allCheckCat=allCat; 
        }
        if(allCheckCat.includes(element.category))
        {
        //Product Data
        productDiv.innerHTML += `<div class="productItems">
                <img src="${element.image}" alt="">
                <h4>${element.category}</h4>
                <p>Price Rs ${element.price} | ${element.rating["rate"]}</p>
                <h3>${element.title}</h3>
            </div>`
        }
        
    });
    
}

displayproduct();

let categoryFilter = ()=>{
    let checkInput = document.querySelectorAll("input[type='checkbox']");
    let checkdata = [];
    checkInput.forEach((element)=>{
        if(element.checked){
            checkdata.push(element.value)
        }
    })
    
    displayproduct(checkdata)
    
}
