function toggleMenu(){
    const menuToggle = document.querySelector('.icon');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}