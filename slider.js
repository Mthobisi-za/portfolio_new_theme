document.addEventListener('DOMContentLoaded', function() {
    var splide = new Splide('.splide', {
        type: 'loop',
        perPage: 3,
        label: 'My AI art Gallery',
        slideFocus: true,
        breakpoints: {
            1506: {
                perPage: 2,
            },
            900: {
                perPage: 1,
            }
        },
    });
    splide.mount();
});