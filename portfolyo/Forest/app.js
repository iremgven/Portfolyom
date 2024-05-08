const main = document.querySelector(".main");

// Creating header element

let header = document.createElement("div");
header.style.minHeight = "5vh";
header.style.minWidth = "100vw";
header.style.background = "rgba(0,0,0,.5)";
header.style.position = "fixed"
header.style.zIndex = "1"

let logo = document.createElement("h2");
logo.textContent = "LOGO";
logo.style.fontSize = "2rem";
logo.style.letterSpacing = "5px";
logo.style.marginLeft = "20px";
logo.style.color = "white";

header.appendChild(logo);
main.appendChild(header);


// Creating image section with botton 

let image = document.createElement("section");
image.id = "home"
image.style.position = "absolute"
image.style.top = "0"
// image.style.zIndex = "-1"
image.style.minHeight = "30vh";
image.style.minWidth = "100vw"
image.style.background = "linear-gradient(rgba(0, 0, 0, 0.5), transparent), url('./image/bg.jpg') no-repeat";
image.style.backgroundSize = "cover";
image.style.backgroundPosition = "top";
image.style.objectFit = "cover";
image.style.objectPosition = "center"
image.style.display = "flex"
image.style.justifyContent = "center"
image.style.alignItems = "center"


main.appendChild(image);

// Creating Slogan

let Slogan = document.createElement("h1")
Slogan.textContent = "Explore your Nearest Forest with a single Reservation"
Slogan.style.color = "white"
Slogan.style.fontSize = "2rem"
Slogan.style.letterSpacing = "2px"
Slogan.style.minWidth = "100vw"
Slogan.style.textAlign = "center"
Slogan.style.textShadow = "5px 5px 5px black"

image.appendChild(Slogan);


// Create reservation button 

let button = document.createElement("div");

button.style.position = "absolute"
button.style.top = "70%"
button.style.padding = "0.5rem 2rem"
button.style.border = "1px solid transparent"
button.style.color = "white"
button.style.fontSize = "1.5rem"
button.style.borderRadius = "10px"
button.style.boxShadow = "4px 2px 3px black"
button.style.backgroundColor = "rgba(0,0,0,0.5)"
button.style.cursor = "pointer"


button.textContent = "Explore Now"
image.appendChild(button);

// creating reservation section 

let sectionbooking = document.createElement("section");

sectionbooking.style.position = "absolute"
sectionbooking.style.top = "50%"
sectionbooking.style.height = "40vh"
sectionbooking.style.minWidth = "100vw"
main.appendChild(sectionbooking);

let booking = document.createElement("div")
booking.style.height = "100%"
booking.style.width = "50%"
booking.style.margin = "auto"
booking.style.display = "flex"
booking.style.justifyContent = "center"

sectionbooking.appendChild(booking);


let imagediv = document.createElement("div")
imagediv.style.width = "600px"
imagediv.style.borderRight = "1px solid rgba(0,0,0,0.2)"

let imagebooking = document.createElement("img")
imagebooking.src = "./image/booking.jpg"
imagebooking.style.height = "100%"
imagebooking.style.padding = "0.5rem 0.5rem"
imagediv.appendChild(imagebooking);
booking.appendChild(imagediv);

let inputdiv = document.createElement("div");
inputdiv.style.width = "600px"
inputdiv.style.padding = "0.5rem 2rem"
inputdiv.style.display = "flex"
inputdiv.style.flexDirection = "column"
inputdiv.style.justifyContent = "center"
inputdiv.style.alignItems = "center"

let inputinfos = ["Name", "Surname", "Phone", "E-mail"];

for (let i = 1; i <= 4; i++) {
    let input = document.createElement("input")
    input.placeholder = inputinfos[i - 1];
    input.style.padding = "0.5rem"
    input.style.outline = "none"
    input.style.border = "1px solid rgba(0,0,0,0.2)"
    input.style.borderRadius = "10px"
    input.style.fontSize = "1.2rem"
    input.style.marginTop = "20px"
    inputdiv.appendChild(input)
    booking.appendChild(inputdiv)
}

let submitbutton = document.createElement("div")
submitbutton.textContent = "SUBMIT"
submitbutton.style.padding = "0.5rem 2rem"
submitbutton.style.borderRadius = "10px"
submitbutton.style.boxShadow = "4px 2px 3px rgba(0,0,0,0,2 )"
submitbutton.style.marginTop = "50px"
submitbutton.style.background = "green"
submitbutton.style.color = "white"
submitbutton.style.fontSize = "1.2rem"
submitbutton.style.letterSpacing = "5px"
submitbutton.style.cursor = "pointer"
inputdiv.appendChild(submitbutton)


// creating contact section

let sectioncontact = document.createElement("section");

sectioncontact.style.position = "absolute"
sectioncontact.style.minHeight = "50vh"
sectioncontact.style.minWidth = "50vw"
sectioncontact.style.left = "50%"
sectioncontact.style.transform = "translateX(-50%)"
sectioncontact.style.top = "90%"
sectioncontact.style.marginTop = "20px"
sectioncontact.style.borderTop = "1px solid rgba(0,0,0,0.2)"
main.appendChild(sectioncontact);

let contact = document.createElement("div");
contact.style.position = "absolute"
contact.style.minWidth = "50vw"
contact.style.minHeight = "100%"
contact.style.display = "flex"
contact.style.flexDirection = "column"
contact.style.textAlign = "center"
contact.style.alignItems = "center"
sectioncontact.appendChild(contact)

let contactheader = document.createElement("h1")
contactheader.style.letterSpacing = "3px"
contactheader.style.fontSize = "5rem"
contactheader.style.opacity = "0.3";
contactheader.textContent = "CONTACT"
contactheader.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif"
contact.appendChild(contactheader);

let addressparagraph = document.createElement("p")
addressparagraph.style.width = "20%"
addressparagraph.style.color = "black"
addressparagraph.textContent = "75 E. Santa Clara Street Suite 1100 San  Jose, CA 95113"
contact.appendChild(addressparagraph)

let phoneparagraph = document.createElement("p")
phoneparagraph.style.width = "50%"
phoneparagraph.textContent = "Phone(pbx): 925-935-2525"
contact.appendChild(phoneparagraph);

let emailparagraph = document.createElement("p")
emailparagraph.style.width = "50%"
emailparagraph.textContent = "E-mail: merinevug@worldtravel.com"
contact.appendChild(emailparagraph);

document.querySelectorAll("p").forEach((item) => {
    item.style.marginTop = "20px"
})

