import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.css";
import './style.css';
 


let kep = document.getElementById('kep')
let url = document.getElementById('url')
let kepszelesseg = document.getElementById('kepszelesseg')
let keretmeret = document.getElementById('keretmeret')
let keretszin = document.getElementById('szin')
let gomb = document.getElementById('dark')
url.addEventListener('keyup', () => {
    document.getElementById('kep').src = url.value
})
kepszelesseg.addEventListener('change', () => {
    kep.style.width = kepszelesseg.value + "px"    
})
keretmeret.addEventListener('change', () => {
    kep.style.border =  keretmeret.value + "px" +  " solid black"
})
keretszin.addEventListener('change', () => {
    kep.style.borderColor = keretszin.value
})

gomb.addEventListener('click', () => {
    if(gomb.value == 0) {
        document.body.className = "dark-mode"
        gomb.innerText = "Világos mód"
        gomb.value = 1
    } else {
        document.body.className = ""
        gomb.innerText = "Sötét mód"
        gomb.value = 0
    }

}) 
