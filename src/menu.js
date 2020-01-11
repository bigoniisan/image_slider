const Menu = () => {

    const ASPECT_RATIO = [16, 9];

    const HEIGHT = 50 * ASPECT_RATIO[0];
    const WIDTH = 50 * ASPECT_RATIO[1];

    const PROFILEIMG_HEIGHT = 50;
    const PROFILEIMG_WIDTH = 50;

    const container = document.getElementById("container");

    const menu = document.createElement("div");
    menu.style.background = "#306060";
    menu.style.height = `${HEIGHT}px`; // 16:9
    menu.style.width = `${WIDTH}px`; // 16:9
    menu.style.fontFamily = "Segoe UI";
    menu.style.fontSize = `${WIDTH * 0.05}px`

    const header = document.createElement("div");
    header.style.width = WIDTH;
    header.style.display = "inline-block";
    header.style.paddingTop = "30px";
    // header.style.border = "1px solid black";

    const profileImg = document.createElement("img");
    profileImg.src = "../res/emilia_profile.jpg";
    profileImg.style.height = `${PROFILEIMG_HEIGHT}px`;
    profileImg.style.width = `${PROFILEIMG_WIDTH}px`;
    profileImg.style.display = "inline-block";
    profileImg.style.padding = "10px";
    // profileImg.style.border = "1px solid yellow";

    const name = document.createElement("div");
    name.textContent = "Miroslava Savitskaya";
    name.style.color = "#C7DEDF";
    name.style.display = "inline-block";
    
    name.style.fontWeight = "bold";
    name.style.float = "right";
    // name.style.border = "1px solid red";

    const activeStatus = document.createElement("div");
    activeStatus.textContent = "Active status";
    activeStatus.style.color = "#64908F";
    activeStatus.style.fontSize = `${WIDTH * 0.04}px`;
    activeStatus.style.fontWeight = "normal";

    const body = document.createElement("div");
    body.style.width = `${WIDTH}px`;
    body.style.display = "inline-block";
    body.style.marginTop = "80px";
    // body.style.border = "1px solid black";

    const createOption = (title) => {
        const newOption = document.createElement("div");
        newOption.className = "option";
        newOption.textContent = title;
        newOption.style.padding = "20px";
        newOption.style.color = "#5E8B8C";
        newOption.style.fontSize = `${WIDTH * 0.05}px`
        newOption.addEventListener("mouseenter", (e) => {
            newOption.style.color = "#8EB2B6";
        });
        newOption.addEventListener("mouseleave", (e) => {
            newOption.style.color = "#5E8B8C";
        })
        return newOption;
    }

    const options = document.createElement("div");
    options.id = "options";
    // options.style.marginRight = "199px";
    options.style.display = "inline-block";
    // options.style.border = "1px solid blue";

    const optionsList = [
        "Adoption",
        "Donation",
        "Add pet",
        "Favorites",
        "Messages",
        "Profile"
    ];

    for (let option of optionsList) {
        const newOption = createOption(option);
        options.appendChild(newOption);
    }

    const previewImage = document.createElement("img");
    previewImage.src = "../res/preview.jpg";
    previewImage.style.display = "inline-block";
    previewImage.style.float = "right";
    // previewImage.style.border = "1px solid yellow";

    const footer = document.createElement("div");
    footer.style.width = WIDTH;
    footer.style.display = "inline-block";
    footer.style.marginTop = "100px";
    // footer.style.border = "1px solid purple";

    footer.appendChild(createOption("Settings"));
    const separator = document.createElement("div");
    separator.textContent = "   |   ";
    separator.style.color = "#5E8B8C";
    footer.appendChild(separator);
    footer.appendChild(createOption("Log out"));

    for (let option of footer.childNodes) {
        option.style.display = "inline-block";
    }

    name.appendChild(activeStatus);
    header.appendChild(profileImg);
    header.appendChild(name);
    body.appendChild(options);
    body.appendChild(previewImage);
    menu.appendChild(header);
    menu.appendChild(body);
    menu.appendChild(footer);
    container.appendChild(menu);
};

export default Menu;