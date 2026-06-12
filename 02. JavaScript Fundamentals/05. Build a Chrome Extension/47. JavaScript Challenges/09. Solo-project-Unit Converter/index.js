/*
1 meter = 3.281 feet
1 litre = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-value")
const btn = document.getElementById("convert-btn")

const lengthEl = document.getElementById("length-result")
const volumeEl = document.getElementById("volume-result")
const massEl = document.getElementById("mass-result")

btn.addEventListener("click", function() {
    let value = Number(inputEl.value)

    // Length
    let metersToFeet = value * 3.28084
    let feetToMeters = value / 3.28084

    // Volume
    let litersToGallons = value * 0.264172
    let gallonsToLiters = value / 0.264172

    // Mass
    let kilosToPounds = value * 2.20462
    let poundsToKilos = value / 2.20462

    lengthEl.textContent = `${value} meters = ${metersToFeet.toFixed(3)} feet | ${value} feet = ${feetToMeters.toFixed(3)} meters`

    volumeEl.textContent = `${value} liters = ${litersToGallons.toFixed(3)} gallons | ${value} gallons = ${gallonsToLiters.toFixed(3)} liters`

    massEl.textContent = `${value} kilos = ${kilosToPounds.toFixed(3)} pounds | ${value} pounds = ${poundsToKilos.toFixed(3)} kilos`
})