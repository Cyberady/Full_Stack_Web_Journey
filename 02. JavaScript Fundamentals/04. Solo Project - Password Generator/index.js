const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "~`!@#$%^&*()_-+={}[]|:;<>,.?/";

const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2");
const button = document.getElementById("generateBtn");
const slider = document.getElementById("lengthSlider");
const lengthValue = document.getElementById("lengthValue");

const numbersToggle = document.getElementById("numbers");
const symbolsToggle = document.getElementById("symbols");

// Update slider value
slider.addEventListener("input", () => {
    lengthValue.textContent = slider.value;
});

// Generate password
function generatePassword() {
    let chars = letters;

    if (numbersToggle.checked) chars += numbers;
    if (symbolsToggle.checked) chars += symbols;

    let password = "";

    for (let i = 0; i < slider.value; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    return password;
}

// Button click
button.addEventListener("click", () => {
    pass1.textContent = generatePassword();
    pass2.textContent = generatePassword();
});

// Copy on click
function copyText(text) {
    navigator.clipboard.writeText(text);
    alert("Copied: " + text);
}

pass1.addEventListener("click", () => copyText(pass1.textContent));
pass2.addEventListener("click", () => copyText(pass2.textContent));