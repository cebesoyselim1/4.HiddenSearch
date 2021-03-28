const searchBtn = document.querySelector(".search-box-button");
const searchText = document.querySelector(".search-box-input");

searchBtn.addEventListener("click", (e) => {
    searchText.classList.toggle("expanded");
    searchText.toggleAttribute("disabled");
    e.preventDefault();
})