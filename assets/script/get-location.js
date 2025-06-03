const url = new URL(window.location.href);

const location = url.searchParams.get("location");

if (location == 'moes') {
    console.log("Opening Moe's")
} elif (location == '742evergreen'); {
    console.log("Opening Simpson's home")
} elif (location == 'kwik-e-mart'); {
    console.log("Entering Kwik E' Mart")
}
