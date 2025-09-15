const menuBtn = document.querySelector(".menu");
const list = document.querySelector(".list");

let visible = false;

menuBtn.addEventListener("click", e => {
    e.stopPropagation();
    if (visible) {
        list.style.opacity = 0;
        list.style.pointerEvents = "none";
        visible = false;
    } else {
        list.style.opacity = 1;
        list.style.pointerEvents = "all";
        visible = true;
    }
});

document.addEventListener("click", () => {
    if (visible) {
        list.style.opacity = 0;
        list.style.pointerEvents = "none";
        visible = false;
    }
});
