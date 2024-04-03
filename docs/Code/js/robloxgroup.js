document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the class 'robloxGroupImage'
    document.querySelectorAll('.robloxGroupImage').forEach(function(imageElement) {
        const groupId = imageElement.getAttribute('data-group-id');
        const apiUrl = `https://thumbnails.roblox.com/v1/groups/icons?groupIds=${groupId}&size=150x150&format=Png&isCircular=false`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Assuming the response has the image URL, update the src attribute of your image
                const imageUrl = data.data[0].imageUrl;
                imageElement.src = imageUrl;
            })
            .catch(error => console.error('Error fetching Roblox group image:', error));
    });
});
