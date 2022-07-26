export function loadHomePage(){
    const contentContainer = document.querySelector("#content");

    contentContainer.replaceChildren();

    //main content
    const mainContainer = document.createElement("main");
    const heading = document.createElement("h1");
    heading.textContent = "Hong Kong Chinese Buffet"
    heading.className = "text-gradient"
    const horiBreak = document.createElement("hr");
    const mainPara = document.createElement("p");
    mainPara.textContent = "Open 6 Days A Week";
    mainPara.className = "gradient-back";

    const openHours1 = document.createElement("div")
    const openHours2 = document.createElement("div")
    const openHours3 = document.createElement("div")
    const openHours4 = document.createElement("div")
    const hourContainer = document.createElement("div")
    
    hourContainer.className ="hours"
    openHours1.textContent = "Monday: 11AM - 9:30PM"
    openHours1.className = "hours-back";
    openHours2.textContent = "Tuesday: Closed"
    openHours2.className = "hours-back";
    openHours3.textContent = "Wed-Sat: 11AM - 9:30PM"
    openHours3.className = "hours-back";
    openHours4.textContent = "Sunday: 12AM - 10PM"
    openHours4.className = "hours-back";

    hourContainer.append(openHours1,openHours2,openHours3,openHours4)

    mainContainer.append(heading, horiBreak, mainPara, hourContainer);

    //footer
    const footer = document.createElement("footer");
    const footerPara = document.createElement("p");
    footerPara.textContent = "Across the street from Little Ceasers";
    footerPara.className = "footer-text";

    footer.append(footerPara)

    contentContainer.append(mainContainer, footer);
}