import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'

// Generate the fish list
//const fishHTML = fishList()
//document.getElementById("fishList").innerHTML = fishHTML;




document.addEventListener("DOMContentLoaded", () => {
const fishHTML = fishList()
document.querySelector(".fish-container").innerHTML = fishHTML

// Generate the care tips
const tipHTML = tipList()
document.getElementById("tipList").innerHTML = tipHTML;


// Generate the location list
const locationHTML = locationList()
document.getElementById("locationList").innerHTML = locationHTML;
});
