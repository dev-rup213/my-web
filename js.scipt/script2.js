document.querySelectorAll('.add-cart').forEach(function(button){button.onclick=function(){alert("Item Added to cart!");};document.getElementById("storecart").innerText = "Item Selected: 0"});
document.querySelectorAll('.add-buy').forEach(function(button){button.onclick=function(){alert("Congratulations !!! Your order recorded sucessfully.");};});
document.querySelectorAll('.less-cart').forEach(function(button){button.onclick=function(){alert("Item is deducted from your cart!!")}})
let storecount = parseInt(localStorage.getItem('count')) || 0;
let classicspoonCount=parseInt(localStorage.getItem('classicspooncount')) || 0;//localStorage.getItem('classicspooncount') || 0;
let chocolatespoonCount=parseInt(localStorage.getItem('chocolatespooncount')) || 0;//localStorage.getItem('chocolatespoonCount') ||0;
let classicforkCount=parseInt(localStorage.getItem('classicforkcount')) || 0;//localStorage.getItem('classicforkCount') ||0;
let chocolateforkCount=parseInt(localStorage.getItem('chocolateforkcount')) || 0;//localStorage.getItem('chocolateforkCoun') ||0;
let classicbowlCount=parseInt(localStorage.getItem('classicbowlcount')) || 0;//localStorage.getItem('classicbowlCount') ||0;
let chocolatebowlCount=parseInt(localStorage.getItem('chocolatebowlcount')) || 0;//localStorage.getItem('chocolatebowlCount') ||0;
let classicsetCount=parseInt(localStorage.getItem('classicsetcount')) || 0;
let chocolatesetCount=parseInt(localStorage.getItem('chocolatesetcount')) || 0;
let prices = {
    classicspoon: 30,
    chocolatespoon: 35,
    classicfork: 30,
    chocolatefork: 35,
    classicbowl: 30,
    chocolatebowl: 35,
    classicset: 100,
    chocolateset: 120,
};

function saveData(){
    localStorage.setItem('count',storecount);
    localStorage.setItem('classicspooncount',classicspoonCount);
    localStorage.setItem('chocolatespooncount',chocolatespoonCount);
    localStorage.setItem('classicforkcount',classicforkCount);
    localStorage.setItem('chocolateforkcount',chocolateforkCount);
    localStorage.setItem('classicbowlcount',classicbowlCount);
    localStorage.setItem('chocolatebowlcount', chocolatebowlCount);
    localStorage.setItem('classicsetcount',classicsetCount);
    localStorage.setItem('chocolatesetcount',chocolatesetCount);
    localStorage.setItem('price',JSON.stringify(prices));
}
function updateUI(){
    document.getElementById("storecart").innerText = "Item selected:"+storecount;

}

updateUI()

document.getElementById("bot1").onclick = () => {
    classicspoonCount++;
    storecount++ ;
    alert("Item-added to the cart!!!");
    saveData(); updateUI();

};
document.getElementById("bot2").onclick = () => {
    chocolatespoonCount++; 
    storecount++ ;
    alert("Item-added to the cart!!!");
    saveData(); updateUI();

};
document.getElementById("bot3").onclick = () => {
    classicforkCount++; 
    storecount++ ;
    alert("Item-added to the cart!!!");
    saveData(); updateUI();

};
document.getElementById("bot4").onclick = () => { 
    chocolateforkCount++;
    storecount++ ;
    alert("Item-added to the cart!!!");
    saveData(); updateUI();

};
document.getElementById("bot5").onclick = () => {
    classicsetCount++;
    storecount++ ;
    alert("Item-added to the cart!!!");
    saveData(); updateUI();

};
document.getElementById("bot6").onclick =() => { 
    chocolatesetCount++;
    storecount++ ;
    alert("Item-added to the cart!!!");
    saveData();updateUI();

};
document.getElementById("bot7").onclick = () =>{ 
    classicbowlCount++;
    storecount++ ;
    alert("Item-added to the cart!!!");
    saveData();updateUI();

};
document.getElementById("bot8").onclick = () =>{
    chocolatebowlCount++; 
    storecount++ ;
    alert("Item-added to the cart!!!");
    saveData();updateUI();

};
document.getElementById("remove").onclick = () =>{ 

    storecount=0;
    totalPrice=0;
    chocolatesetCount=0;
    classicsetCount=0;
    chocolatebowlCount=0;
    classicbowlCount=0;
    chocolateforkCount=0;
    classicforkCount=0;
    classicspoonCount=0;
    chocolatespoonCount=0;

    saveData();
    updateUI();

    document.getElementById("storecart").innerText = "Item selected: " +storecount;
    document.getElementById("total").innerText ="Total price: Rs." + totalPrice;

};
document.getElementsByClassName("add-buy")[0].onclick = () =>{
    storecount=0;
    totalPrice=0;
    chocolatesetCount=0;
    classicsetCount=0;
    chocolatebowlCount=0;
    classicbowlCount=0;
    chocolateforkCount=0;
    classicforkCount =0;
    classicspoonCount=0;
    chocolatespoonCount=0;

    saveData();
    updateUI();

    alert("Congratulations !!! Your order recorded sucessfully.");

    document.getElementById("storecart").innerText ="Item selected: " +storecount;
}
let addbuyElements = document.getElementsByClassName("add-buy") ;
for (let i = 0; i < addbuyElements.length; i++) {
    addbuyElements[i].onclick = () => {
    storecount=0;
    totalPrice=0;
    chocolatesetCount=0;
    classicsetCount=0;
    chocolatebowlCount=0;
    classicbowlCount=0;
    chocolateforkCount=0;
    classicforkCount=0;
    classicspoonCount=0;
    chocolatespoonCount=0;
    saveData();
    updateUI();

    alert("Congratulations !!! Your order recorded sucessfully.");

    document.getElementById("storecart").innerText ="Item selected:  "+storecount ;
    document.getElementById("total").innerText ="Total price: Rs." + totalPrice;
}};
function calculatetotal(){
    let total =
        (classicspoonCount * prices.classicspoon)+
        (chocolatespoonCount *prices.chocolatespoon)+
        (classicforkCount * prices.classicfork)+
        (chocolateforkCount * prices.chocolatefork)+
        (classicbowlCount * prices.classicbowl)+
        (chocolatebowlCount * prices.chocolatebowl)+
        (classicsetCount * prices.classicset)+
        (chocolatesetCount * prices.chocolateset);
    return total
}

document.getElementById("seeprice").onclick = () => {
    let totalPrice = calculatetotal();
    saveData();updateUI();
    document.getElementById("total").innerText ="Total price: Rs." + totalPrice;
};
