// const button = document.getElementById("showCards");
// const cards = document.querySelectorAll(".card-item");

// let isVisible = false;

// button.addEventListener("click", function () {

//   if (!isVisible) {
    
//     cards.forEach((card, index) => {
//       setTimeout(() => {
//         card.style.opacity = "1";
//         card.style.transform = "translateY(0)";
//       }, index * 300);
//     });

//     button.textContent = "Hide Qualifications";
//     isVisible = true;

//   } else {
    
//     cards.forEach((card, index) => {
//       setTimeout(() => {
//         card.style.opacity = "0";
//         card.style.transform = "translateY(30px)";
//       }, index * 300);
//     });

//     button.textContent = "Show Qualifications";
//     isVisible = false;
//   }

// });