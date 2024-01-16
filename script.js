document.getElementById('randomImage').addEventListener('click', function() {
    changeImage();
});

document.getElementById('resetImages').addEventListener('click', function() {
    resetImages();
});

let originalImages = [
    'images/1.png',
    'images/2.png',
    'images/3.png',
    
    // Add more image paths here
];

let images = [...originalImages];

function changeImage() {
    if (images.length === 0) {
        alert("카드가 다 끝났습니다. HOME 버튼을 눌러 재시작 해주세요!");
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
    document.getElementById('randomImage').src = 'images/homepage.png'; // Set this to your initial/main image
}
