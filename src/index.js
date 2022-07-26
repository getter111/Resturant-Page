import {loadHomePage } from "./home-page-load";
import {loadContactPage} from "./contact-page-load";
import {loadMenuPage} from "./menu-page.load"
import './style.css'

loadHomePage();

let switchTabsModule = (function() {

    const homePage = document.querySelector(".home");
    homePage.addEventListener("click", loadHomePage);

    const menuPage = document.querySelector(".menu");
    menuPage.addEventListener("click", loadMenuPage);

    const contactPage = document.querySelector(".contact");
    contactPage.addEventListener("click", loadContactPage);
})();