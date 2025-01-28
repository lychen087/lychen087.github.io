// document.addEventListener("DOMContentLoaded", () => {
//     const tabLinks = document.querySelectorAll(".tab-link");
//     const tabContents = document.querySelectorAll(".tab-content");

//     tabLinks.forEach((tab) => {
//         tab.addEventListener("click", (e) => {
//             e.preventDefault();
//             tabLinks.forEach((link) => link.classList.remove("active"));
//             tabContents.forEach((content) => content.classList.remove("active"));

//             tab.classList.add("active");
//             const targetTab = tab.getAttribute("data-tab");
//             document.getElementById(targetTab).classList.add("active");
//         });
//     });
// });
document.addEventListener("DOMContentLoaded", () => {
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");

    tabLinks.forEach((tab) => {
        tab.addEventListener("click", (e) => {
            e.preventDefault();

            tabLinks.forEach((link) => link.classList.remove("active"));
            tabContents.forEach((content) => content.classList.remove("active"));

            tab.classList.add("active");
            const targetTab = tab.getAttribute("data-tab");
            document.getElementById(targetTab).classList.add("active");
        });
    });
});
