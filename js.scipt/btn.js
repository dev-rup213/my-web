const searchinput = document.getElementById("search-input")
const products = document.querySelectorAll(".Product")
const noResult = document.getElementById("noResults")
searchinput.addEventListener("input",function(){
    const query =
searchinput.value.toLowerCase().trim();
    let matchfound = false;

    products.forEach(Product => {
        const text =
        Product.innerText.toLowerCase();
        if (text.includes(query)) {
            Product.style.display = "block";
            matchfound= true;
        }
        else{
            Product.style.display = "none";


        }
        });
        noResult.style.display = matchfound ? "none" : "block" ;
        
    });
const search = document.getElementById("search-btn");
const container = document.getElementById("search-input")

search.onclick = () => {

        container.style.display = "block";

    }