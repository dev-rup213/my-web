document.querySelectorAll('.add-cart').forEach(function(button){button.onclick=function(){alert("Item Added to cart!");};});
document.querySelectorAll('.add-buy').forEach(function(button){button.onclick=function(){alert("Congratulations !!! Your order recorded sucessfully.");};});
document.querySelectorAll('.less-cart').forEach(function(button){button.onclick=function(){alert("Item is deducted from your cart!!")}})
// Load from localStorage or default to 0
let count = parseInt(localStorage.getItem('count')) || 0;
let classicspoonCount = parseInt(localStorage.getItem('classicspoonCount')) || 0;
let chocolatespoonCount = parseInt(localStorage.getItem('chocolatespoonCount')) || 0;
let classicforkCount = parseInt(localStorage.getItem('classicforkCount')) || 0;
let chocolateforkCount = parseInt(localStorage.getItem('chocolateforkCount')) || 0;
let classicbowlCount = parseInt(localStorage.getItem('classicbowlCount')) || 0;
let chocolatebowlCount = parseInt(localStorage.getItem('chocolatebowlCount')) || 0;

const prices = {
    classicspoon: 30,
    chocolatespoon: 35,
    classicfork: 30,
    chocolatefork: 35,
    classicbowl: 60,
    chocolatebowl: 70
};

// Save all data to localStorage
function saveData() {
    localStorage.setItem('count', count);
    localStorage.setItem('classicspoonCount', classicspoonCount);
    localStorage.setItem('chocolatespoonCount', chocolatespoonCount);
    localStorage.setItem('classicforkCount', classicforkCount);
    localStorage.setItem('chocolateforkCount', chocolateforkCount);
    localStorage.setItem('classicbowlCount', classicbowlCount);
    localStorage.setItem('chocolatebowlCount', chocolatebowlCount);
    localStorage.setItem('price', JSON.stringify(prices));
}

// Update UI
function updateUI() {
    document.getElementById("display1").innerText = classicspoonCount;
    document.getElementById("display2").innerText = chocolatespoonCount;
    document.getElementById("display3").innerText = chocolateforkCount;
    document.getElementById("display4").innerText = classicforkCount;
    document.getElementById("display5").innerText = classicbowlCount;
    document.getElementById("display6").innerText = chocolatebowlCount;
    document.getElementById("cart").innerText = "Item selected: " + count;
}

// Initialize UI on load
updateUI();

// Add / Remove buttons
document.getElementById("btn1").onclick = () => {
    classicspoonCount++; count++;
    alert("Item-added to the cart!!!");
    saveData(); updateUI();
};

document.getElementById("btn2").onclick = () => {
    if (classicspoonCount > 0) {
        classicspoonCount--; count--;
         alert("Item-deducted from the cart!!!");
        saveData(); updateUI();
    }
};

document.getElementById("btn3").onclick = () => {
    chocolatespoonCount++; count++;
    alert("Item-added to the cart!!!");
    saveData(); updateUI();
};

document.getElementById("btn4").onclick = () => {
    if (chocolatespoonCount > 0) {
        chocolatespoonCount--; count--;
         alert("Item-deducted from the cart!!!");
        saveData(); updateUI();
    }
};

document.getElementById("btn5").onclick = () => {
    chocolateforkCount++; count++;
    alert("Item-added to the cart!!!");
    saveData(); updateUI();
};

document.getElementById("btn6").onclick = () => {
    if (chocolateforkCount > 0) {
        chocolateforkCount--; count--;
         alert("Item-deducted from the cart!!!");
        saveData(); updateUI();
    }
};

document.getElementById("btn7").onclick = () => {
    classicforkCount++; count++;
    alert("Item-added to the cart!!!");
    saveData(); updateUI();
};

document.getElementById("btn8").onclick = () => {
    if (classicforkCount > 0) {
        classicforkCount--; count--;
         alert("Item-deducted from the cart!!!");
        saveData(); updateUI();
    }
};

document.getElementById("btn9").onclick = () => {
    classicbowlCount++; count++;
    alert("Item-added to the cart!!!");
    saveData(); updateUI();
};

document.getElementById("btn10").onclick = () => {
    if (classicbowlCount > 0) {
        classicbowlCount--; count--;
         alert("Item-deducted from the cart!!!");
        saveData(); updateUI();
    }
};

document.getElementById("btn11").onclick = () => {
    chocolatebowlCount++; count++;
    alert("Item-added to the cart!!!");
    saveData(); updateUI();
};

document.getElementById("btn12").onclick = () => {
    if (chocolatebowlCount > 0) {
        chocolatebowlCount--; count--;
         alert("Item-deducted from the cart!!!");
        saveData(); updateUI();
    }
};

// Calculate total
function calculatetotal() {
    return (
        classicspoonCount * prices.classicspoon +
        chocolatespoonCount * prices.chocolatespoon +
        classicforkCount * prices.classicfork +
        chocolateforkCount * prices.chocolatefork +
        classicbowlCount * prices.classicbowl +
        chocolatebowlCount * prices.chocolatebowl
    );
}

// Show total price
document.getElementById("seeprice").onclick = () => {
    saveData(),updateUI();
    document.getElementById("total").innerText =
        "Total price: Rs." + calculatetotal();
};

// Buy all (reset everything)
document.getElementById("buyall").onclick = () => {
    count = 0;
    classicspoonCount = 0;
    chocolatespoonCount = 0;
    classicforkCount = 0;
    chocolateforkCount = 0;
    classicbowlCount = 0;
    chocolatebowlCount = 0;

    saveData();
    updateUI();

    document.getElementById("total").innerText = "";
    document.getElementById("cart").innerText = "🛒 Your Cart is empty!!";
};
function calculatetotal(){
    let total =
        (classicspoonCount * prices.classicspoon)+
        (chocolatespoonCount *prices.chocolatespoon)+
        (classicforkCount * prices.classicfork)+
        (chocolateforkCount * prices.chocolatefork)+
        (classicbowlCount * prices.classicbowl)+
        (chocolatebowlCount * prices.chocolatebowl);
    return total
}


document.getElementById("seeprice").onclick = () =>{
    let totalPrice = calculatetotal();
    saveData(); updateUI();
    document.getElementById("total").innerText ="Total price: Rs." + totalPrice;
};
document.getElementById("Buy1").addEventListener("click",function(){
    if(classicspoonCount>0) {
        count -=classicspoonCount;
    
    
    classicspoonCount -=classicspoonCount;
    document.getElementById("display1").innerText = +classicspoonCount;
    document.getElementById("see1").innerText ="Total Price:" +classicspoonCount;
    document.getElementById("cart").innerText="Item selected: " +count;

    }
});
document.getElementById("Buy2").addEventListener("click",function(){
    if (chocolatespoonCount>0){
        count -=chocolatespoonCount
        chocolatespoonCount -=chocolatespoonCount;
    
    document.getElementById("display2").innerText = chocolatespoonCount;
    document.getElementById("see2").innerText ="Total Price:" +chocolatespoonCount;
    document.getElementById("cart").innerText="Item selected: " +count;
    }
});
document.getElementById("Buy3").addEventListener("click",function(){
    if (chocolateforkCount>0){
        count-=chocolateforkCount
        chocolateforkCount-=chocolateforkCount;
    

    document.getElementById("display3").innerText = chocolateforkCount;
     document.getElementById("see3").innerText ="Total Price:" +chocolateforkCount;
    document.getElementById("cart").innerText="Item selected: " +count;
    }
});
document.getElementById("Buy4").addEventListener("click",function(){
    if (classicforkCount > 0) {
        count -= classicforkCount
        classicforkCount -= classicforkCount; 
    document.getElementById("display4").innerText = classicforkCount;
    document.getElementById("see4").innerText ="Total Price:" +classicforkCount;
    document.getElementById("cart").innerText="Item selected: " +count;

    }
});
document.getElementById("Buy5").addEventListener("click",function(){
    if (classicbowlCount > 0) {
        count -= classicbowlCount
        classicbowlCount -= classicbowlCount;
    document.getElementById("see5").innerText ="Total Price:" +classicbowlCount;
    document.getElementById("cart").innerText="Item selected: " +count;
    document.getElementById("display5").innerText = classicbowlCount;
    }
});
document.getElementById("Buy6").addEventListener("click",function(){
    if (chocolatebowlCount > 0){
        count -=chocolatebowlCount
        chocolatebowlCount -= chocolatebowlCount;
    document.getElementById("see6").innerText ="Total Price:" +chocolatebowlCount;
    document.getElementById("cart").innerText="Item selected: " +count;
    
    document.getElementById("display6").innerText = chocolatebowlCount;
    }
});
document.getElementById("price1").addEventListener("click",function(){
    let price1=classicspoonCount*prices.classicspoon;
    document.getElementById("see1").innerText = "Total Price:" +price1 ;
});
document.getElementById("price2").addEventListener("click",function(){
    let price2=chocolatespoonCount*prices.chocolatespoon;
    document.getElementById("see2").innerText = "Total Price:" +price2 ;
});
document.getElementById("price3").addEventListener("click",function(){
    let price2=chocolateforkCount*prices.chocolatefork;
    document.getElementById("see3").innerText = "Total Price:" +price2 ;
});
document.getElementById("price4").addEventListener("click",function(){
    let price2=classicforkCount*prices.classicfork;
    document.getElementById("see4").innerText = "Total Price:" +price2 ;
});
document.getElementById("price5").addEventListener("click",function(){
    let price2=classicbowlCount*prices.classicbowl;
    document.getElementById("see5").innerText = "Total Price:" +price2 ;
});
document.getElementById("price6").addEventListener("click",function(){
    let price2=chocolatebowlCount*prices.chocolatebowl;
    document.getElementById("see6").innerText = "Total Price:" +price2 ;
});

