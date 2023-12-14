function validateCoordinates() {
    const latitudeInput = document.getElementById('latitude');
    const longitudeInput = document.getElementById('longitude');

    const latitude = parseFloat(latitudeInput.value);
    const longitude = parseFloat(longitudeInput.value);

    if (isValidCoordinate(latitude) && isValidCoordinate(longitude)) {
        showAutoFill();
    } else {
        alert('Invalid coordinates. Please enter valid latitude and longitude.');
    }
}

function isValidCoordinate(coord) {
    return !isNaN(coord) && coord >= -90 && coord <= 90;
}

function showAutoFill() {
    const autoFillDiv = document.getElementById('autoFill');
    const suggestionsList = document.getElementById('suggestionsList');

    // Simulate auto-fill suggestions (replace this with your logic)
    const suggestions = ['City A', 'City B', 'City C'];

    suggestionsList.innerHTML = '';
    suggestions.forEach(suggestion => {
        const listItem = document.createElement('li');
        listItem.textContent = suggestion;
        suggestionsList.appendChild(listItem);
    });

    autoFillDiv.classList.remove('hidden');
}
