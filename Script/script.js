const toggleMenu = document.querySelector('.toggleMenu');
const navigation = document.querySelector('.navigation');

function toggle() {
    toggleMenu.classList.toggle('active');
    navigation.classList.toggle('active');
}

toggleMenu.addEventListener('click', toggle);
