// 슬라이드 쇼를 시작하는 함수
function showSlides(className) {
    let slideIndex = 0;
    const slides = document.getElementsByClassName(className);
    
    function displaySlides() {
        // 모든 슬라이드를 비활성화
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        
        // 다음 슬라이드를 보여줌
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        
        slides[slideIndex - 1].style.display = "block";
        
        // 1초 후에 displaySlides 함수를 다시 호출
        setTimeout(displaySlides, 1000);
    }
    
    displaySlides();
}

// 슬라이드 쇼 시작
showSlides("slide-container-img");  // 첫 번째 슬라이드 그룹
showSlides("category-best-img");    // 두 번째 슬라이드 그룹






    document.addEventListener("DOMContentLoaded", function() {
        // 왼쪽으로 스크롤
        function scrollToLeft(carousel) {
            console.log("Left Scroll Button Clicked");
            if (carousel) {
                const scrollAmount = carousel.clientWidth; // 한 번에 이동할 너비를 carousel의 보이는 영역 너비로 설정
                carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                console.error("carousel element not found");
            }
        }
    
        // 오른쪽으로 스크롤
        function scrollToRight(carousel) {
            console.log("Right Scroll Button Clicked");
            if (carousel) {
                const scrollAmount = carousel.clientWidth; // 한 번에 이동할 너비를 carousel의 보이는 영역 너비로 설정
                carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            } else {
                console.error("carousel element not found");
            }
        }
    
        // 모든 컨테이너에 대해 이벤트 리스너 추가
        const carouselContainers = document.querySelectorAll('.carousel-container2, .carousel-container3');
    
        carouselContainers.forEach(container => {
            const carousel = container.querySelector('.shopping-item');
            const leftArrow = container.querySelector('.arrow:first-child');
            const rightArrow = container.querySelector('.arrow:last-child');
    
            if (carousel && leftArrow && rightArrow) {
                leftArrow.addEventListener('click', function() {
                    scrollToLeft(carousel);
                });
                rightArrow.addEventListener('click', function() {
                    scrollToRight(carousel);
                });
            } else {
                console.error("Arrows or carousel not found in container:", container);
            }
        });
    });
    
    
    
    
    
