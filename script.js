function askUser() {
    let name = prompt("What is your name?");
    let age = prompt("How old are you?");
    if (age >= 18) {
        alert("Welcome, " + name + "! You're eligible for our space program! 🚀");
    } else {
        alert("Sorry, " + name + ". You must be at least 18 to join our space mission. 🌍");
    }
}