document.querySelectorAll('.add-cart').forEach(function(button){button.onclick=function(){alert("Item Added to cart!");};});
document.querySelectorAll('.add-buy').forEach(function(button){button.onclick=function(){alert("Congratulations !!! Your order recorded sucessfully.");};});
document.querySelectorAll('.less-cart').forEach(function(button){button.onclick=function(){alert("Item is deducted from your cart!!")}})
let count = 0;
let classicspoonCount=0;//localStorage.getItem('classicspooncount') || 0;
let chocolatespoonCount=0;//localStorage.getItem('chocolatespoonCount') ||0;
let classicforkCount=0;//localStorage.getItem('classicforkCount') ||0;
let chocolateforkCount=0;//localStorage.getItem('chocolateforkCoun') ||0;
let classicbowlCount=0;//localStorage.getItem('classicbowlCount') ||0;
let chocolatebowlCount=0;//localStorage.getItem('chocolatebowlCount') ||0;

document.getElementById("btn1").addEventListener("click",function(){
    classicspoonCount++;
    count++;
    document.getElementById("display1").innerText =  + classicspoonCount;
    document.getElementById("cart").innerText ="Item selected: " + count ;
});
document.getElementById("btn2").addEventListener("click",function(){
    if (count > 0) {
    classicspoonCount--;
    count--;
    document.getElementById("display1").innerText =  + classicspoonCount;
    document.getElementById("cart").innerText ="Item selected: " + count;
    }
});
document.getElementById("btn3").addEventListener("click",function(){
    chocolatespoonCount++;
    count++;
    document.getElementById("display2").innerText =  + chocolatespoonCount;
    document.getElementById("cart").innerText ="Item selected: " + count;
});
document.getElementById("btn4").addEventListener("click",function(){
    if (count > 0) {
    chocolatespoonCount--;
    count --;
    document.getElementById("display2").innerText =   chocolatespoonCount;
    document.getElementById("cart").innerText ="Item selected: " + count;
    }
});
document.getElementById("btn5").addEventListener("click",function(){
    chocolateforkCount++;
    count++;
    document.getElementById("display3").innerText =  + chocolateforkCount;
    document.getElementById("cart").innerText ="Item selected: " + count;
});
document.getElementById("btn6").addEventListener("click",function(){
    if (count > 0) {
    chocolateforkCount--;
    count--;
    document.getElementById("display3").innerText =   chocolateforkCount;
    document.getElementById("cart").innerText ="Item selected: " + count;
    }
});
document.getElementById("btn7").addEventListener("click",function(){
    classicforkCount++;
    count++;
    document.getElementById("display4").innerText =  + classicforkCount;
    document.getElementById("cart").innerText ="Item selected: " + count;
});
document.getElementById("btn8").addEventListener("click",function(){
    if (count > 0) {
    chocolateforkCount--;
    count--;
    document.getElementById("display4").innerText =   chocolateforkCount;
    document.getElementById("cart").innerText ="Item selected: " + count;
    }
});
document.getElementById("btn9").addEventListener("click",function(){
    classicbowlCount++;
    count++;
    document.getElementById("display5").innerText =  + classicbowlCount;
    document.getElementById("cart").innerText ="Item selected: " + count;
});
document.getElementById("btn10").addEventListener("click",function(){
    if (count > 0) {
    classicbowlCount--;
    count--;
    document.getElementById("display5").innerText =   classicbowlCount;
    document.getElementById("cart").innerText ="Item selected: " + count;
    }
});
document.getElementById("btn11").addEventListener("click",function(){
    chocolatebowlCount++;
    count++;
    document.getElementById("display6").innerText =  + chocolatebowlCount;
    document.getElementById("cart").innerText ="Item selected: " + count;
});
document.getElementById("btn12").addEventListener("click",function(){
    if (count > 0)  {
    chocolatebowlCount--;
    count--;
    document.getElementById("display6").innerText =   chocolatebowlCount;
    document.getElementById("cart").innerText ="Item selected: " + count;
    }
});
document.getElementById("buyall").addEventListener("click",function(){
    count=0;
    chocolatebowlCount=0;
    chocolateforkCount=0;
    chocolatespoonCount=0;
    classicbowlCount=0;
    classicforkCount=0;
    classicspoonCount=0;
    document.getElementById("display1").innerText =  + classicspoonCount;
    document.getElementById("display2").innerText =  + chocolatespoonCount;
    document.getElementById("display3").innerText =  + chocolateforkCount;
    document.getElementById("display4").innerText =  + classicforkCount;
    document.getElementById("display5").innerText =  + classicbowlCount;
    document.getElementById("display6").innerText =  + chocolatebowlCount;
    document.getElementById("cart").innerText = "Item selected: " + count;
});
