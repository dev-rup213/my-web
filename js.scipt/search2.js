const searchinput = document.getElementById("search-input")
const cards = document.querySelectorAll(".product-card")
const noResult = document.getElementById("noResults")
searchinput.addEventListener("input",function(){
    const query =
searchinput.value.toLowerCase().trim();
    let matchfound = false;

    cards.forEach(card => {
        const text =
        card.innerText.toLowerCase();
        if (text.includes(query)) {
            card.style.display = "";
            matchfound= true;
        }
        else{
            card.style.display = "none";


        }
        });
        noResult.style.display = matchfound ? "none" : "block" ;
        
    });
