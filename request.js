function initiateRecommendation() {
    const confirmationPrompt = document.getElementById('confirmationPrompt');
    confirmationPrompt.classList.remove('hidden');
}

function getRecommendations() {
    const resultDiv = document.getElementById('result');
    resultDiv.classList.remove('hidden');
    resultDiv.innerHTML = '<h2>Crop Recommendations</h2><p>Your personalized crop recommendations will be displayed here.</p>';

    const confirmationPrompt = document.getElementById('confirmationPrompt');
    confirmationPrompt.classList.add('hidden');
}

function cancelRecommendation() {
    const confirmationPrompt = document.getElementById('confirmationPrompt');
    confirmationPrompt.classList.add('hidden');
}
