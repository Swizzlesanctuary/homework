let modal = document.getElementById("modal");
let openBtn = document.getElementById("open");  
let closeBtn = document.getElementById("close"); 
let result = document.getElementById("result");
let plus = document.getElementById("plus");

let count = 0;

openBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

plus.addEventListener("click", () => {
  count++;  
  result.innerText = count; 
});
