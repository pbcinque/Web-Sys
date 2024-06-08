// Array of cookies with their descriptions
const cookies = {
    "Chocolate Chip Cookies": {
        personalityType: "Classic",
        bestTime: "Anytime",
        occasions: "Everyday snack, lunchbox treat, dessert for any occasion. Chocolate chip cookies are the ultimate comfort food, loved by both kids and adults alike. Their chewy texture and sweet, chocolatey flavor make them perfect for satisfying cravings at any time of day."
    },
    "Oatmeal Raisin Cookies": {
        personalityType: "Comforting",
        bestTime: "Morning",
        occasions: "Breakfast or afternoon tea. Oatmeal raisin cookies are like a warm hug on a chilly morning. The combination of hearty oats, plump raisins, and warm spices makes them perfect for pairing with a cup of coffee or tea."
    },
    "Peanut Butter Cookies": {
        personalityType: "Nutty",
        bestTime: "Afternoon",
        occasions: "Picnics or lunchbox treats. Peanut butter cookies are a classic favorite for peanut lovers. Their rich, nutty flavor and chewy texture make them a satisfying treat for any occasion, whether you're packing a snack for a picnic or filling up a lunchbox."
    },
    // Add descriptions for other cookies here...
    "Funfetti Cookies": {
        personalityType: "Cheerful",
        bestTime: "Anytime",
        occasions: "Birthday parties or celebrations. Funfetti cookies are the life of the party with their colorful sprinkles and sweet vanilla flavor. Biting into one is like tasting a rainbow, making them the perfect treat for any festive occasion."
    }
};

function createCookieSections() {
    const main = document.querySelector("main");

    Object.entries(cookies).forEach(([cookie, info]) => {
        const section = document.createElement("section");
        section.classList.add("cookie-section");
        section.id = cookie.toLowerCase().replace(/\s+/g, "-");
        
        const heading = document.createElement("h2");
        heading.textContent = cookie;
        section.appendChild(heading);

        const description = document.createElement("p");
        description.innerHTML = `<strong>Personality Type:</strong> ${info.personalityType}<br>
                                <strong>When It's Good to Bake:</strong> ${info.bestTime}<br>
                                <strong>Occasions:</strong> ${info.occasions}`;
        section.appendChild(description);

        main.appendChild(section);
    });
}

window.onload = createCookieSections;
