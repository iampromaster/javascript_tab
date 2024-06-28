let tabs = document.querySelectorAll(".tabs h3");
let tabContents = document.querySelectorAll(".content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });

    tabs[index].classList.add("active");
    tabContents[index].classList.add("active");
  });
});
