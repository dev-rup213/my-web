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
let prices = {
    classicspoon: 30,
    chocolatespoon: 35,
    classicfork: 30,
    chocolatefork: 35,
    classicbowl: 60,
    chocolatebowl: 70
};

function addEvent(elementId, handler) {
    let element = document.getElementById(elementId);
    element.addEventListener("click",handler);
    element.addEventListener("touchstart",handler);
}

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
addEvent("buyall",function(){

    count=0;
    chocolatebowlCount=0;
    chocolateforkCount=0;
    chocolatespoonCount=0;
    classicbowlCount=0;
    classicforkCount=0;
    classicspoonCount=0;
    totalPrice=0;

    document.getElementById("display1").innerText =  + classicspoonCount;
    document.getElementById("display2").innerText =  + chocolatespoonCount;
    document.getElementById("display3").innerText =  + chocolateforkCount;
    document.getElementById("display4").innerText =  + classicforkCount;
    document.getElementById("display5").innerText =  + classicbowlCount;
    document.getElementById("display6").innerText =  + chocolatebowlCount;
    document.getElementById("see1").innerText ="Total Price:" +classicspoonCount;
    document.getElementById("see2").innerText ="Total Price:" +chocolatespoonCount;
    document.getElementById("see3").innerText ="Total Price:" +chocolateforkCount;
    document.getElementById("see4").innerText ="Total Price:" +classicforkCount;
    document.getElementById("see5").innerText ="Total Price:" +classicbowlCount;
    document.getElementById("see6").innerText ="Total Price:" +chocolatebowlCount;
    document.getElementById("cart").innerText ="🛒 Your Cart is empty!!";
    document.getElementById("total").innerText ="";
});
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


document.getElementById("seeprice").addEventListener("click",function(){
    let totalPrice = calculatetotal();
    document.getElementById("total").innerText ="Total price: Rs." + totalPrice;
});
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

