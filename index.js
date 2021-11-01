const next = document.getElementById("next")
const prev = document.getElementById("prev")
const imgs = document.querySelectorAll(".img")
const box = document.getElementById("box")

let idx = 0
let interval = setInterval(run, 2000);

function run() {
    idx++
    getImg()


}

function getImg() {
    if (idx > imgs.length - 1) {
        idx = 0
    } else if (idx < 0) {
        idx = imgs.length - 1;
    }
    box.style.transform = `translateX(${-idx * 400}px)`
}



next.addEventListener("click", () => {
    idx++
    getImg()
    resetInterval()

})



prev.addEventListener("click", () => {
    idx--
    getImg()
    resetInterval()
})


function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000);
}



