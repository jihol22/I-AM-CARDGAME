document.getElementById('changeImage').addEventListener('click', function() {
    changeImage();
});

document.getElementById('resetImages').addEventListener('click', function() {
    resetImages();
});

let originalImages = [
    'images/one.jpg',
    'images/two.jpg',
    'images/three.jpg',
    // Add more image paths here
];

let images = [...originalImages];

function changeImage() {
    if (images.length === 0) {
        alert("All images have been shown!");
        return;
    }

    let randomIndex = Math.floor(Math.random() * images.length);
    let selectedImage = images[randomIndex];
    document.getElementById('randomImage').src = selectedImage;

    // Remove the shown image from the array
    images.splice(randomIndex, 1);
}

function resetImages() {
    images = [...originalImages];
    document.getElementById('randomImage').src = images[0];
}
