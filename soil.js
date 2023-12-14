function validateSoilData() {
    const soilTypeInput = document.getElementById('soilType');
    const phLevelInput = document.getElementById('phLevel');
    const nutrientContentInput = document.getElementById('nutrientContent');
    const errorMessagesDiv = document.getElementById('errorMessages');
    const errorList = document.getElementById('errorList');

    // Reset error messages
    errorList.innerHTML = '';

    const soilType = soilTypeInput.value.trim();
    const phLevel = phLevelInput.value.trim();
    const nutrientContent = nutrientContentInput.value.trim();

    if (!soilType) {
        showError('Soil Type is required.');
    }

    if (!phLevel || isNaN(phLevel)) {
        showError('Enter a valid Soil pH Level.');
    }

    if (!nutrientContent) {
        showError('Nutrient Content is required.');
    }

    if (errorList.childElementCount > 0) {
        errorMessagesDiv.classList.remove('hidden');
    } else {
        // Process the valid soil data (you can customize this part)
        alert('Soil data submitted successfully!');
    }
}

function showError(message) {
    const errorList = document.getElementById('errorList');
    const listItem = document.createElement('li');
    listItem.textContent = message;
    errorList.appendChild(listItem);
}
