/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let btnEl = document.getElementById("btn")
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")
function feet(){
     return inputEl.value * 3.281
}
function meter(){
    return inputEl.value * 0.304
}
function gallon(){
    return inputEl.value * 0.264
}
function litre(){
    return inputEl.value * 3.787
}
function pound(){
    return inputEl.value * 2.204 
}
function kilo(){
    return inputEl.value * 0.453
}
btnEl.addEventListener("click",function(){
    lengthEl.textContent = `${inputEl.value} meters = ${feet().toFixed(3)} feets | ${inputEl.value} feets = ${meter().toFixed(3)} meters`
    volumeEl.textContent = `${inputEl.value} litres = ${gallon().toFixed(3)} gallons | ${inputEl.value} gallons = ${litre().toFixed(3)} litres`
    massEl.textContent = `${inputEl.value} kilos = ${pound().toFixed(3)} pounds | ${inputEl.value} pounds = ${kilo().toFixed(3)} kilos`
})
