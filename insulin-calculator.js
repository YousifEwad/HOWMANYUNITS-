
// Sample list of insulin products (Top 100 in the UK - Add more here)
const insulinProducts = [
    { name: 'NovoRapid FlexPen', concentration: '100 units/ml', unitsPerPen: 300 },
    { name: 'Humalog KwikPen', concentration: '100 units/ml', unitsPerPen: 300 },
    { name: 'Lantus SoloStar', concentration: '100 units/ml', unitsPerPen: 300 },
    // Add more insulin products as necessary.
];

// Populate the insulin products dropdown
const insulinSelect = document.getElementById('insulinProduct');
insulinProducts.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name;
    option.textContent = `${product.name} (${product.concentration})`;
    insulinSelect.appendChild(option);
});

function calculateDuration() {
    const dailyUsage = document.getElementById('dailyUsage').value;
    const unitsPerPen = 300;  // Common for many insulin pens

    if (dailyUsage > 0) {
        const duration = unitsPerPen / dailyUsage;
        document.getElementById('result').textContent = `A pen will last approximately ${duration.toFixed(2)} days.`;
    } else {
        document.getElementById('result').textContent = 'Please enter a valid daily insulin usage.';
    }
}
