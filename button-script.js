const addContentBigButton = document.querySelector("#add-content-main-button");
const addContentSmallButton = document.querySelectorAll(".small_add-content_button")

const showSmallButtons = (e) => {
addContentBigButton.classList.add("visually-hidden");
addContentSmallButton.forEach(button => {
    button.classList.remove("visually-hidden")
});
}

addContentBigButton.addEventListener("click", showSmallButtons);