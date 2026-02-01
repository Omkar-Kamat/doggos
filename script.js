let link = (page)=>{
    window.location.href = `${page}.html`;
    document.getElementById("menu").style.display = "none";
}

let themeChange = () => {
    const body = document.body;
    body.classList.toggle("dark");


    if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
};

window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }
});


let menu = () =>{
    const menuDisplay = document.getElementById("menu").style.display
    if(menuDisplay == "none"){
        document.getElementById("menu").style.display = "block";
    }else{
        document.getElementById("menu").style.display = "none";
    }
}