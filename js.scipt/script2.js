document.querySelectorAll('.add-cart').forEach(function(button){button.onclick=function(){alert("Item Added to cart!");};document.getElementById("storecart").innerText = "Item Selected: 0"});
document.querySelectorAll('.add-buy').forEach(function(button){button.onclick=function(){alert("Congratulations !!! Your order recorded sucessfully.");};});
document.querySelectorAll('.less-cart').forEach(function(button){button.onclick=function(){alert("Item is deducted from your cart!!")}})
let storecount = 0;
document.getElementById("bot1").addEventListener("click",function(){ 
    storecount++ ;
    document.getElementById("storecart").innerText = "Item selected: " +storecount;

});
document.getElementById("bot2").addEventListener("click",function(){ 
    storecount++ ;
    document.getElementById("storecart").innerText = "Item selected: " +storecount;

});
document.getElementById("bot3").addEventListener("click",function(){ 
    storecount++ ;
    document.getElementById("storecart").innerText = "Item selected: " +storecount;

});
document.getElementById("bot4").addEventListener("click",function(){ 
    storecount++ ;
    document.getElementById("storecart").innerText = "Item selected: " +storecount;

});
document.getElementById("bot5").addEventListener("click",function(){ 
    storecount++ ;
    document.getElementById("storecart").innerText = "Item selected: " +storecount;

});
document.getElementById("bot6").addEventListener("click",function(){ 
    storecount++ ;
    document.getElementById("storecart").innerText = "Item selected: " +storecount;

});
document.getElementById("bot7").addEventListener("click",function(){ 
    storecount++ ;
    document.getElementById("storecart").innerText = "Item selected: " +storecount;

});
document.getElementById("bot8").addEventListener("click",function(){ 
    storecount++ ;
    document.getElementById("storecart").innerText = "Item selected: " +storecount;

});
document.getElementById("remove").addEventListener("click",function(){ 
    storecount--;
    document.getElementById("storecart").innerText = "Item selected: " +storecount;

});
document.getElementsByClassName("add-buy")[0].addEventListener("click",function(){
    storecount=0;
    document.getElementById("storecart").innerText ="Item selected: " +storecount;
})
let addbuyElements = document.getElementsByClassName("add-buy") ;
for (let i = 0; i < addbuyElements.length; i++) {
    addbuyElements[i].addEventListener("click",function(){
    storecount=0;
    document.getElementById("storecart").innerText ="Item selected:  "+storecount ;
})};