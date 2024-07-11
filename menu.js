function Makechanges(iconClicked) {
    var closeIcon = document.querySelector('.close');
    var openIcon = document.querySelector('.open');
    var overlay = document.querySelector('.overlay');
    if (iconClicked == 'open') {
        closeIcon.classList.add('animateIn')
        openIcon.classList.remove('animateIn')
        closeIcon.style.display = 'block'
        openIcon.style.display = 'none';
        overlay.style.display = 'block';
        overlay.classList.add('animateInOver')
        console.log('open')
    } else {
        closeIcon.classList.remove('animateIn')
        openIcon.classList.add('animateIn')
        openIcon.style.display = 'block'
        closeIcon.style.display = 'none'
        overlay.style.display = 'none';
        overlay.classList.remove('animateInOver')

    }
}