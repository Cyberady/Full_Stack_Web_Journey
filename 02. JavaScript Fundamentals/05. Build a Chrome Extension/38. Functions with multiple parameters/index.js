const welcomeEl = document.getElementById("welcome-el")

function greetUser(greeting, name, emoji) {
    // Rewrite the expression using template literals
    // Add the abitlity to choose the emoji as well!
    welcomeEl.textContent = `${greeting}, ${name} ${emoji}`
}

greetUser("Howdy", "James", "👋")