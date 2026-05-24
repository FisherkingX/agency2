const panelOverlay = document.getElementById('panelOverlay');
const bottomSheet = document.getElementById('bottomSheet');
const dynamicContent = document.getElementById('dynamicContent');

// Live dataset configuration
const itemsDataset = {
    burger: {
        title: "Truffle Smash Burger",
        price: "3.250 KWD",
        desc: "Double wagyu beef layers, scratch-made black truffle aioli, melted mature sharp white cheddar, and sweet caramelized balsamic onions loaded inside a toasted local brioche bun."
    },
    matcha: {
        title: "Ceremonial Uji Matcha",
        price: "2.500 KWD",
        desc: "Authentic first-harvest stoneground ceremonial Uji matcha whisked traditionally at 80°C, poured smoothly over cold premium organic oat milk and raw artisan agave glaze sweetener."
    }
};

// Theme Switching Pipeline Engine Logic
function setTheme(themeName) {
    document.documentElement.setAttribute('data-theme', themeName);
    
    // Clear old active button borders
    document.querySelectorAll('.style-pill').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Set target button active status layout rule
    const event = window.event;
    if (event && event.target) {
        event.target.classList.add('active');
    }
}

// Open Slider Control Pipeline Logic
function openSlider(key) {
    const targetData = itemsDataset[key];
    if (!targetData) return;

    dynamicContent.innerHTML = `
        <div class="sheet-container-layout">
            <h2>${targetData.title}</h2>
            <div class="sheet-price-tag">${targetData.price}</div>
            <p>${targetData.desc}</p>
        </div>
    `;

    panelOverlay.classList.add('active');
    bottomSheet.classList.add('active');
}

function closeSlider() {
    panelOverlay.classList.remove('active');
    bottomSheet.classList.remove('active');
}