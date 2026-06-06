function showProduct() {
    alert("Product details page coming soon!");
}

const form = document.getElementById("contactForm");

if(form){
    form.addEventListener("submit", function(e){
        e.preventDefault();
        alert("Thank you! We will contact you soon.");
    });
}