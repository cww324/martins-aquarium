import { database } from './aquariumData.js';




export const mostHolyFish = () => {
    return database.fish.filter(fish => fish.length % 3 === 0 && fish.length % 5 !== 0)
}
export const soldierFish = () => {
    return database.fish.filter(fish => fish.length % 5 === 0 && fish.length % 3 !== 0)
}
export const regularFish = () => {
    return database.fish.filter(fish => fish.length % 3 !== 0 && fish.length % 5 !== 0)
}
/*
export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    let holyFishHTML = ""
    for (const fish of database.fish) {
        if (fish.length % 3 === 0 && fish.length % 5 !== 0)
            holyFishHTML += `
                <div class="fish-card">
                <img src="${fish.image}" alt="${fish.name}">
                <h2>${fish.name}</h2>
                <p>Species: ${fish.species}</p>
                <p>Length: ${fish.length} inches</p>
                <p>Location: ${fish.location}</p>
                <p>Diet: ${fish.diet}</p>
            </div>
        `;
            
    }
    return holyFishHTML;
}
*/

/*
export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    let soldierFishHTML = ""
    for (const fish of database.fish) {
        if (fish.length % 5 === 0 && fish.length % 3 !== 0)
            soldierFishHTML += `
                <div class="fish-card">
                <img src="${fish.image}" alt="${fish.name}">
                <h2>${fish.name}</h2>
                <p>Species: ${fish.species}</p>
                <p>Length: ${fish.length} inches</p>
                <p>Location: ${fish.location}</p>
                <p>Diet: ${fish.diet}</p>
            </div>
        `;
    }
    return soldierFishHTML;
}
*/
/*
export const regularFish = () => {
    // Any fish not a multiple of 3 or 5
    let regularFishHTML = ""
    for (const fish of database.fish) {
        if (fish.length % 3 !== 0 && fish.length % 5 !== 0)
            regularFishHTML +=`
                <div class="fish-card">
                <img src="${fish.image}" alt="${fish.name}">
                <h2>${fish.name}</h2>
                <p>Species: ${fish.species}</p>
                <p>Length: ${fish.length} inches</p>
                <p>Location: ${fish.location}</p>
                <p>Diet: ${fish.diet}</p>
            </div>
        `;
    }
    return regularFishHTML;
}
*/

export const fishList = () => {
    let fishHTML = ""

    const holyFish = mostHolyFish();
    const soldierFishies = soldierFish();
    const regularFishies = regularFish();

    const generateFishHTML = (fishArray, fishName) => {
        return fishArray.map(fish => `
             <div class="fish-card ${fishName}">
                <img src="${fish.image}" alt="${fish.name}">
                <h2>${fish.name}</h2>
                <p>Species: ${fish.species}</p>
                <p>Length: ${fish.length} inches</p>
                <p>Location: ${fish.location}</p>
                <p>Diet: ${fish.diet}</p>
             </div>
      `).join("")
    }
    
    fishHTML += generateFishHTML(holyFish, "holy-fish")
    fishHTML += generateFishHTML(soldierFishies, "soldier-fish")
    fishHTML += generateFishHTML(regularFishies, "regular-fish")

return fishHTML;
}