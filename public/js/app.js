// ! modal
let signup = document.querySelector(".btn-signup");

let modalDiv = document.querySelector(".modalDiv");

let closeMdl = document.querySelector(".closeMdl");

signup.addEventListener("click", (e) =>{
    modalDiv.classList.add("d-flex")
});

closeMdl.addEventListener("click" , (e) => {
    modalDiv.classList.remove("d-flex");
})

// ! watch video
let watch = document.querySelector(".heroWatch");
