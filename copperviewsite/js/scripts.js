const hb = document.querySelector('#hamburgerBtn');

hb.addEventListener('click' , () => {
    document.querySelector('#primaryNav').classList.toggle('open')
    hb.classList.toggle('open');
})