$(".button").click(function(){
  $(".my-form").toggle();
});
$(".button-no").click(function(){
  $(".my-form").hide();
  alert('Thank You for visiting us.');
});
$(".btn").click(function(){
  alert('We have received your Message we will contact you .');
});

// JS SECTION FOR CHOOSE CATEGORY
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});
// END OF JS SECTION OF CHOOSE CATEGORY