import { database } from './aquariumData.js';

export const locationList = () => {
    // Use a Set to extract unique locations from the fish data
    const uniqueLocations = [...new Set(database.fish.map(fish => fish.location))];

    // Create HTML for each unique location
    return `
        <section id="locationList">
            ${uniqueLocations.map(location => `
                <div class="location">
                    <h3>${location}</h3>
                </div>
            `).join("")}
        </section>
    `;
};
