
function changeCss () {
    let navElement = document.querySelector(".left-nav-pc");
if (this.scrollY > 100){
    navElement.classList.remove('nav-anim-none');
    navElement.classList.add('nav-anim');
} else {
    navElement.classList.remove('nav-anim');
    navElement.classList.add('nav-anim-none');
}
  }

  window.addEventListener("scroll", changeCss , false);

let mainPC=document.querySelector('.main-pc');
let contactPC=document.querySelector('.contact-pc');

let navArr=document.querySelectorAll('.lnb');

navArr[0].addEventListener('click',()=>{
    if (!navArr[0].classList.contains('lnb-enable')){
        navArr[0].classList.add('lnb-enable');
        navArr[1].classList.remove('lnb-enable');
        navArr[2].classList.remove('lnb-enable');
        navArr[3].classList.remove('lnb-enable');
        navArr[4].classList.remove('lnb-enable');
        navArr[5].classList.remove('lnb-enable');
        mainPC.style.display='block';
        contactPC.style.display='none';
    }
})

navArr[1].addEventListener('click',()=>{
    if (!navArr[1].classList.contains('lnb-enable')){
        navArr[1].classList.add('lnb-enable');
        navArr[0].classList.remove('lnb-enable');
        navArr[2].classList.remove('lnb-enable');
        navArr[3].classList.remove('lnb-enable');
        navArr[4].classList.remove('lnb-enable');
        navArr[5].classList.remove('lnb-enable');
    }
})


navArr[2].addEventListener('click',()=>{
    if (!navArr[2].classList.contains('lnb-enable')){
        navArr[2].classList.add('lnb-enable');
        navArr[0].classList.remove('lnb-enable');
        navArr[1].classList.remove('lnb-enable');
        navArr[3].classList.remove('lnb-enable');
        navArr[4].classList.remove('lnb-enable');
        navArr[5].classList.remove('lnb-enable');
    }
})

navArr[3].addEventListener('click',()=>{
    if (!navArr[3].classList.contains('lnb-enable')){
        navArr[3].classList.add('lnb-enable');
        navArr[0].classList.remove('lnb-enable');
        navArr[1].classList.remove('lnb-enable');
        navArr[2].classList.remove('lnb-enable');
        navArr[4].classList.remove('lnb-enable');
        navArr[5].classList.remove('lnb-enable');
    }
})


navArr[4].addEventListener('click',()=>{
    if (!navArr[4].classList.contains('lnb-enable')){
        navArr[4].classList.add('lnb-enable');
        navArr[0].classList.remove('lnb-enable');
        navArr[1].classList.remove('lnb-enable');
        navArr[2].classList.remove('lnb-enable');
        navArr[3].classList.remove('lnb-enable');
        navArr[5].classList.remove('lnb-enable');
    }
})


navArr[5].addEventListener('click',()=>{
    if (!navArr[5].classList.contains('lnb-enable')){
        navArr[5].classList.add('lnb-enable');
        navArr[0].classList.remove('lnb-enable');
        navArr[1].classList.remove('lnb-enable');
        navArr[2].classList.remove('lnb-enable');
        navArr[3].classList.remove('lnb-enable');
        navArr[4].classList.remove('lnb-enable');
        mainPC.style.display='none';
        contactPC.style.display='block';
    }
})





let navBlockArr=document.querySelectorAll('.left-nav-block');

let p1HoverArr=document.querySelectorAll('.p1-hover');

navBlockArr[0].addEventListener('mouseover',()=>{
    p1HoverArr[0].style.opacity='1';
})

navBlockArr[0].addEventListener('mouseout',()=>{
    p1HoverArr[0].style.opacity='0';
})


navBlockArr[1].addEventListener('mouseover',()=>{
    p1HoverArr[1].style.opacity='1';
})

navBlockArr[1].addEventListener('mouseout',()=>{
    p1HoverArr[1].style.opacity='0';
})


navBlockArr[2].addEventListener('mouseover',()=>{
    p1HoverArr[2].style.opacity='1';
})

navBlockArr[2].addEventListener('mouseout',()=>{
    p1HoverArr[2].style.opacity='0';
})


navBlockArr[3].addEventListener('mouseover',()=>{
    p1HoverArr[3].style.opacity='1';
})

navBlockArr[3].addEventListener('mouseout',()=>{
    p1HoverArr[3].style.opacity='0';
})


navBlockArr[4].addEventListener('mouseover',()=>{
    p1HoverArr[4].style.opacity='1';
})

navBlockArr[4].addEventListener('mouseout',()=>{
    p1HoverArr[4].style.opacity='0';
})


navBlockArr[5].addEventListener('mouseover',()=>{
    p1HoverArr[5].style.opacity='1';
})

navBlockArr[5].addEventListener('mouseout',()=>{
    p1HoverArr[5].style.opacity='0';
})