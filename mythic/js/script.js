function toggleHoodies() {
    const hoodies = document.querySelectorAll('.hoodies .hood');
    hoodies.forEach(hood => {
        hood.classList.toggle('hidden');
    });
}

function buyNow(itemId) {
    const phoneNumber = "+254798224458"; 
    const baseUrl = `https://wa.me/${phoneNumber}`;
    const itemMessageMap = {
        'hood1': "I'm interested in buying Hoodie 1.",
        'hood2': "I'm interested in buying Hoodie 2.",
        'hood3': "I'm interested in buying Hoodie 3.",
        'hood4': "I'm interested in buying Hoodie 4.",
        'hood5': "I'm interested in buying Hoodie 5.",
        'hood6': "I'm interested in buying Hoodie 6.",
        'hood7': "I'm interested in buying Hoodie 7."
    };

    if (!itemMessageMap[itemId]) {
        console.error(`Item ID "${itemId}" not found in the message map.`);
        return;
    }

    const message = encodeURIComponent(itemMessageMap[itemId]);
    const url = `${baseUrl}?text=${message}`;
    
    // Log URL to console for debugging
    console.log(`Redirecting to: ${url}`);

    // Open WhatsApp in a new tab or window
    window.open(url, '_blank');
}
