import locationImage from './images/location1.png'

export function loadContactPage(){
    const contentContainer = document.querySelector("#content");

    contentContainer.replaceChildren();

    //main content
    const mainContainer = document.createElement("main");

    const div2 = document.createElement("div")
    div2.className ="contact-info";
    const para1 = document.createElement("p")
    para1.textContent = "Telephone: 803-276-6126"
    const para2 = document.createElement("p")
    para2.textContent = "Located: 1329 Wilson Rd, Newberry SC"
    const img = document.createElement("img")
    img.className = "location-background"
    img.src = locationImage
    
    para1.className = "gradient-back";
    para2.className = "gradient-back";

    div2.append(para1,img, para2)
    mainContainer.append(div2);

    //footer
    const footer = document.createElement("footer");
    const footerPara = document.createElement("p");
    footerPara.textContent = "Across the street from Little Ceasers";
    footerPara.className = "footer-text";

    footer.append(footerPara)

    contentContainer.append(mainContainer, footer);
}