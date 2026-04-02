document.querySelectorAll('.add-cart').forEach(function(button){button.onclick=function(){alert("Item Added to cart!");};document.getElementById("storecart").innerText = "Item Selected: 0"});
document.querySelectorAll('.add-buy').forEach(function(button){button.onclick=function(){alert("Congratulations !!! Your order recorded sucessfully.");};});
document.querySelectorAll('.less-cart').forEach(function(button){button.onclick=function(){alert("Item is deducted from your cart!!")}})
let storecount = 0;
let classicspoonCount=0;//localStorage.getItem('classicspooncount') || 0;
let chocolatespoonCount=0;//localStorage.getItem('chocolatespoonCount') ||0;
let classicforkCount=0;//localStorage.getItem('classicforkCount') ||0;
let chocolateforkCount=0;//localStorage.getItem('chocolateforkCoun') ||0;
let classicbowlCount=0;//localStorage.getItem('classicbowlCount') ||0;
let chocolatebowlCount=0;//localStorage.getItem('chocolatebowlCount') ||0;
let classicsetCount=0;
let chocolatesetCount=0;
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
document.getElementById("bot1").addEventListener("click",function(){ 
    classicspoonCount++;
    storecount++ ;
    document.getElementById("storecart").innerText = "Item selected: " +storecount;

});
document.getElementById("bot2").addEventListener("click",function(){
    chocolatespoonCount++; 
    storecount++ ;
    document.getElementById("storecart").innerText = "Item selected: " +storecount;

});
document.getElementById("bot3").addEventListener("click",function(){
    classicforkCount++; 
    storecount++ ;
    document.getElementById("storecart").innerText = "Item selected: " +storecount;

});
document.getElementById("bot4").addEventListener("click",function(){ 
    chocolateforkCount++;
    storecount++ ;
    document.getElementById("storecart").innerText = "Item selected: " +storecount;

});
document.getElementById("bot5").addEventListener("click",function(){
    classicsetCount++;
    storecount++ ;
    document.getElementById("storecart").innerText = "Item selected: " +storecount;

});
document.getElementById("bot6").addEventListener("click",function(){ 
    chocolatesetCount++;
    storecount++ ;
    document.getElementById("storecart").innerText = "Item selected: " +storecount;

});
document.getElementById("bot7").addEventListener("click",function(){ 
    classicbowlCount++;
    storecount++ ;
    document.getElementById("storecart").innerText = "Item selected: " +storecount;

});
document.getElementById("bot8").addEventListener("click",function(){
    chocolatebowlCount++; 
    storecount++ ;
    document.getElementById("storecart").innerText = "Item selected: " +storecount;

});
document.getElementById("remove").addEventListener("click",function(){ 
    storecount=0;
    totalPrice=0;
    document.getElementById("storecart").innerText = "Item selected: " +storecount;
    document.getElementById("total").innerText ="Total price: Rs." + totalPrice;

});
document.getElementsByClassName("add-buy")[0].addEventListener("click",function(){
    storecount=0;
    document.getElementById("storecart").innerText ="Item selected: " +storecount;
})
let addbuyElements = document.getElementsByClassName("add-buy") ;
for (let i = 0; i < addbuyElements.length; i++) {
    addbuyElements[i].addEventListener("click",function(){
    storecount=0;
    totalPrice=0;
    document.getElementById("storecart").innerText ="Item selected:  "+storecount ;
    document.getElementById("total").innerText ="Total price: Rs." + totalPrice;
})};
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

document.getElementById("seeprice").addEventListener("click",function(){
    let totalPrice = calculatetotal();
    document.getElementById("total").innerText ="Total price: Rs." + totalPrice;
});