
/**
 * Generates a random RGB color.
 * @returns {string} The random RGB color.
 */
function getRandomColor(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb( ${red}, ${green}, ${blue} )`;
}

let html = '';

/**
 * Loop from 1 to 10 to generate div elements with random background colors.
 */
for( let i = 2; i <= 100; i+=2 ){
    const randomRGB = getRandomColor();
    html += `<div style="background-color: ${randomRGB}">${i}</div>`;
}

// Set the innerHTML of the main element to the generated HTML string
document.querySelector('main').innerHTML = html;