// import { Carousel } from 'flowbite';

const carouselElement = document.getElementById('default-carousel'); 
const $prevButton = document.getElementById('carousel-prev-button');
const $nextButton = document.getElementById('carousel-next-button');

const items = [
    {
        position: 0,
        el: document.getElementById('carousel-item-1'),
    },
    {
        position: 1,
        el: document.getElementById('carousel-item-2'),
    },
    {
        position: 2,
        el: document.getElementById('carousel-item-3'),
    },
];

const options = {
    defaultPosition: 0, 
    interval: 3000,
    // Add other options here if needed
};

const instanceOptions = {
  id: 'carousel-example',
  override: true
};

// Initialize the Flowbite Carousel
const carousel = new Carousel(carouselElement, items, options, instanceOptions);

// Use the built-in Flowbite methods!
$prevButton.addEventListener('click', () => {
    carousel.prev();
});

$nextButton.addEventListener('click', () => {
    carousel.next();
});