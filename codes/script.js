const showBtn = document.querySelector('.navBtn');
const topNav = document.querySelector('.top-nav');

showBtn.addEventListener('click', function() {
    if (topNav.classList.contains('showNav')) {
        topNav.classList.remove('showNav');
        showBtn.innerHTML = '<i class="fa fa-eye"></i>';
    } else {
        topNav.classList.add('showNav');
        showBtn.innerHTML = '<i class="fa fa-eye-slash"></i>';
    }
});
// lightbox//
var lightbox = new SimpleLightbox('.gallery a', { /* options */ });