const btns = Array.from(document.querySelectorAll(".btn"));
//const plusIcon = document.querySelector(".plus-icon");
//const minusIcon = document.querySelector(".minus-icon");


let ans = null;
let iconBtn = null;
function toggle(eventObj) {
    eventObj.preventDefault();
    ans = eventObj.target.parentElement.parentElement.nextElementSibling;
    iconBtn = eventObj.target.parentElement;
    if(ans.classList.contains("hide") && ans.classList.contains("ans")){
        ans.classList.remove("hide");
        
        iconBtn.classList.add("hide");
        iconBtn.nextElementSibling.classList.remove("hide");
    

    } else {
        ans.classList.add("hide");

        iconBtn.classList.add("hide");
        iconBtn.previousElementSibling.classList.remove("hide");
    }
}


btns.forEach((btn) => {
    btn.addEventListener("click", toggle);
});
