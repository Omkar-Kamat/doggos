const link = (page) => {
    window.location.href = `${page}.html`;
};

const themeChange = () => {
    const body = document.body;
    body.classList.toggle("dark");

    localStorage.setItem(
        "theme",
        body.classList.contains("dark") ? "dark" : "light"
    );
};

window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }
});

const menu = () => {
    const menuEl = document.getElementById("menu");
    menuEl.style.display = menuEl.style.display === "block" ? "none" : "block";
};
