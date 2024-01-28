document.getElementById('randomImage').addEventListener('click', function() {
    changeImage();
});

document.getElementById('resetImages').addEventListener('click', function() {
    resetImages();
});

let originalImages = [
    'images/b1.png',
    'images/b2.png',
    'images/b3.png',
    'images/b4.png',
    'images/b5.png',
    'images/b6.png',
    'images/b7.png',
    'images/b8.png',
    'images/b9.png',
    'images/b10.png',
    'images/b11.png',
    'images/b12.png',
    'images/b13.png',
    'images/b14.png',
    'images/b15.png',
    'images/b16.png',
    'images/b17.png',
    'images/b18.png',
    
    'images/k1.png',
    'images/k2.png',
    'images/k3.png',
    'images/k4.png',
    'images/k5.png',
    'images/k6.png',
    'images/k7.png',
    'images/k8.png',
    'images/k9.png',
    'images/k10.png',
    'images/k11.png',
    'images/k12.png',
    'images/k13.png',
    'images/k14.png',
    'images/k15.png',
    'images/k16.png',
    'images/k17.png',
    'images/k18.png',
    'images/k19.png',
    'images/k20.png',
    
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
