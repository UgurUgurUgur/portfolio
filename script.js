function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

document.getElementById("copyright").innerHTML = "Copyright &copy; " + new Date().getFullYear() + " Ugurkan Karaca. All Rights Reserved.";