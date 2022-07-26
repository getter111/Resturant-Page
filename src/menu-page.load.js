import food1 from "./images/porksteak.JPG"
import food2 from "./images/wat.JPG"
import food3 from "./images/wat2.PNG"
import food4 from "./images/wat3.JPG"

export function loadMenuPage(){
    const contentContainer = document.querySelector("#content");
    
    contentContainer.replaceChildren();

    //main content
    const mainContainer = document.createElement("main");

    const menuContainer =document.createElement("div");
    menuContainer.className="menuContainer"
 
    const img = document.createElement("img")
    img.src = food1
    img.className = "shteak"
    const img2 = document.createElement("img")
    img2.src = food2
    img2.className = "shteak"
    const img3 = document.createElement("img")
    img3.src = food3
    img3.className = "shteak"
    const img4 = document.createElement("img")
    img4.src = food4
    img4.className = "shteak"

    const text = document.createElement("p");
    text.textContent = "0 good pictures"

    menuContainer.append(img, img2, img3, img4, text)
    mainContainer.append(menuContainer)
    //footer
    const footer = document.createElement("footer");
    const footerPara = document.createElement("p");
    footerPara.textContent = "Across the street from Little Ceasers";
    footerPara.className = "footer-text";

    footer.append(footerPara)

    contentContainer.append(mainContainer, footer);
}