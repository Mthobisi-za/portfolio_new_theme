document.addEventListener('DOMContentLoaded', function() {
    var splide = new Splide('.splide', {
        type: 'loop',
        perPage: 3,
        label: 'My AI art Gallery',
        slideFocus: true
    });
    splide.mount();
});