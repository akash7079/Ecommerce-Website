const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const icon = document.getElementById("mobile");
const close = document.getElementById("close");

if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
        icon.style.display = "none";
   })
}
if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active');
        icon.style.display = "flex";
    })
}

//script for single product

    document.querySelectorAll(".pro").forEach(item => {
    item.addEventListener("click", function() {
        window.location.href = "sproduct.html";
        });
    });








