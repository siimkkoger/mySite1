/**
 * Created by siimk on 7/25/2017.
 */


console.log("Hello");


document.getElementsByTagName("body")[0].backgroundColor = "blue";

let btn = document.querySelector("#c").addEventListener("click", () => {
    console.log("working");
});

let rightbtn = document.querySelector("#right").addEventListener("click", () => {
    console.log("Hello");
});





let leftbtn = document.querySelector("#left");
leftbtn.addEventListener("click", () => {
    console.log("Hello left");
});

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    let i;
    let x = document.querySelectorAll(".mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        console.log("---------"+i);
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}