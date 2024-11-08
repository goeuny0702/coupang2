// 왼쪽으로 스크롤
function scrollToLeft() {
    console.log("Left Scroll Button Clicked");
    const carousel = document.getElementById("carousel");
    carousel.scrollBy({ left: -200, behavior: 'smooth' });
}

// 오른쪽으로 스크롤
function scrollToRight() {
    console.log("Right Scroll Button Clicked");
    const carousel = document.getElementById("carousel");
    carousel.scrollBy({ left: 200, behavior: 'smooth' });
}



