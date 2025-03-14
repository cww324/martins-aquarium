import { database } from './aquariumData.js';

export const tipList = () => {
    return `
        <ul class="tips">
            ${database.tips.map(tip => `<li class="tip">${tip.topic}: ${tip.text}</li>`).join("")}
        </ul>
    `;
};