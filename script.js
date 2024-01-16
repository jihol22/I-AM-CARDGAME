html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: hidden; /* Prevents scrolling */
    position: relative; /* Needed for absolute positioning of the reset button */
    display: flex;
    justify-content: center;
    align-items: center; /* Center content vertically and horizontally */
}

#imageContainer {
    position: relative; /* Relative positioning */
    width: 90vw;
    
    display: flex;
    justify-content: center;
    align-items: center;
}

#randomImage {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensures the image covers the area */
}

#resetImages {
    position: absolute; /* Positioned relative to #imageContainer */
    left: 50%;
    bottom: -10px;
    transform: translateX(-50%);
    width: 150px; /* Adjust as needed */
    cursor: pointer;
}
