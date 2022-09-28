const inputEl = document.getElementById("number-input")
const convertBtn = document.getElementById("convert")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204
const feetToMeter = 0.304
const gallonToLiter = 4.54609
const poundToKilo = 0.453592

inputEl.value = 1
calculate()

convertBtn.addEventListener("click", function () {
        calculate()
    })

    function calculate() {
        let baseValue = inputEl.value
        let meterConvert = baseValue * meterToFeet
        let feetConvert = baseValue * feetToMeter
        let literConvert = baseValue * literToGallon
        let gallonConvert = baseValue * gallonToLiter
        let kiloConvert = baseValue * kiloToPound
        let poundConvert = baseValue * poundToKilo

        lengthEl.textContent = `${baseValue} Meters = ${meterConvert.toFixed(3)} Feet | ${baseValue} Feet = ${feetConvert.toFixed(3)} Meters`

        volumeEl.textContent = `${baseValue} Liters = ${literConvert.toFixed(3)} Gallons | ${baseValue} Gallons = ${gallonConvert.toFixed(3)} Liters`

        massEl.textContent = `${baseValue} Kilograms = ${kiloConvert.toFixed(3)} Pounds | ${baseValue} Pounds = ${poundConvert.toFixed(3)} Meters`
}
