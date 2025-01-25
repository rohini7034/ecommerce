const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}

// document.addEventListener("DOMContentLoaded", () => {
//     const bar = document.getElementById("bar");
//     const navbar = document.getElementById("navbar");
//     const close = document.getElementById("close");
  
//     // Open the navbar
//     if (bar) {
//       bar.addEventListener("click", () => {
//         navbar.classList.add("active");
//       });
//     }
  
//     // Close the navbar
//     if (close) {
//       close.addEventListener("click", () => {
//         navbar.classList.remove("active");
//       });
//     }
//   });