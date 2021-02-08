const selectElement = (element) => document.querySelector(element);

selectElement(".mobile-menu").addEventListener("click", () => {
  selectElement("header").classList.toggle("active");
});

// console.log("Hello");

const coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
