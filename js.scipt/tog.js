// Side Nav Toggle
const navOpen = document.getElementById('navOpen');
const navClose = document.getElementById('navClose');
const navOverlay = document.getElementById('navOverlay');

function openNav() {
  document.body.classList.add('nav-open');
}

function closeNav() {
  document.body.classList.remove('nav-open');
}

navOpen?.addEventListener('click', openNav);
navClose?.addEventListener('click', closeNav);
navOverlay?.addEventListener('click', closeNav);

// Close on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeNav();
});

// Highlight active page in side nav
document.querySelectorAll('.side-nav-links a').forEach(link => {
  if (link.href === window.location.href) {
    link.style.background = 'var(--bg, #f8f9fa)';
    link.style.fontWeight = '600';
  }
});
    function displayFinalTotal() {
        const prices = {
            classicspoon: 30, chocolatespoon: 35,
            classicfork: 30, chocolatefork: 35,
            classicbowl: 60, chocolatebowl: 70,
            classicset: 100, chocolateset: 120
        };

            const total = 
            (parseInt(localStorage.getItem('classicspoonCount')) || 0) * prices.classicspoon +
            (parseInt(localStorage.getItem('chocolatespoonCount')) || 0) * prices.chocolatespoon +
            (parseInt(localStorage.getItem('classicforkCount')) || 0) * prices.classicfork +
            (parseInt(localStorage.getItem('chocolateforkCount')) || 0) * prices.chocolatefork +
            (parseInt(localStorage.getItem('classicbowlCount')) || 0) * prices.classicbowl +
            (parseInt(localStorage.getItem('chocolatebowlCount')) || 0) * prices.chocolatebowl +
            (parseInt(localStorage.getItem('classicsetCount')) || 0) * prices.classicset +
            (parseInt(localStorage.getItem('chocolatesetCount')) || 0) * prices.chocolateset;

            document.getElementById("total").innerText = "Rs. " + total;
            document.getElementById("pay").innerText = "Proceed to Pay: Rs. " + total;

        return total;


    }



    function delivery() {
        const total = displayFinalTotal();
        if (total === 0) {
             document.getElementById("delivery").innerText = "Your Cart is empty!"; 
            return;
        }
        if (total < 500) {
            document.getElementById("delivery").innerText = "Estimated delivery time : 3-4 days"; 
            return;
         }
        if (total >= 500) {
            document.getElementById("delivery").innerText = "Estimated delivery time : Within 1 day";
            return;
        }


  
    }
    window.onload = function() {
        delivery();
    }
        document.getElementById("cash").onclick = () => {
        document.getElementById("pay").innerText = "Place Order";
    }
        document.getElementById("UPI").onclick = () => {
        let total = displayFinalTotal()
        document.getElementById("pay").innerText = "Proceed to Pay: Rs. " + total;
    }
        document.getElementById("CARD").onclick = () => {
        let total = displayFinalTotal()
        document.getElementById("pay").innerText = "Proceed to Pay: Rs. " + total;
    }

        // Payment Method Toggling
    const options = document.querySelectorAll(".option");
const methods = document.querySelectorAll(".method");
        const tiles = document.querySelectorAll(".tile");

options.forEach(option => {
  option.addEventListener("click", () => {
    options.forEach(o => o.classList.remove("active"));
    methods.forEach(m => m.classList.remove("active"));
    option.classList.add("active");
                const methodId = option.getAttribute('data-method');
                document.getElementById(methodId).classList.add("active");
});
        });
tiles.forEach(tile => {
  tile.addEventListener("click", () => {
    tiles.forEach(t => t.classList.remove("active"));
    tile.classList.add("active");
                console.log("Selected UPI:", tile.dataset.upi);
  });
        });
        
        // Final "Pay" Action
        document.getElementById("pay").onclick = () => {
        removeCart();
        const total = displayFinalTotal();
        document.getElementById("delivery").innerText = "Your Cart is empty !!"; 
        alert("Thank you for choosing sustainability! Your order has been placed amounting.");
        
           
        };
    function removeCart() {
        parseInt(localStorage.removeItem('cartCount'));
        parseInt(localStorage.removeItem('classicspoonCount'));
        parseInt(localStorage.removeItem('chocolatespoonCount'));
        parseInt(localStorage.removeItem('classicforkCount'));
        parseInt(localStorage.removeItem('chocolateforkCount'));
        parseInt(localStorage.removeItem('classicbowlCount'));
        parseInt(localStorage.removeItem('chocolatebowlCount'));
        parseInt(localStorage.removeItem('classicsetCount')) ;
        parseInt(localStorage.removeItem('chocolatesetCount'));


    }

    
