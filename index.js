const heroSection = document.querySelector('.section-hero');
const numberAnimation = document.querySelector('.section-work-data')
const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll('.p-btn');
const p_img_elem = document.querySelectorAll('.img-overlay')

// sticky-navbar start
const options =
{
  root: null,
  threshold: 0 }
const observer = new IntersectionObserver(
  entries => {
    const ent = entries[0];

    !ent.isIntersecting ?
    document.body.classList.add("sticky") :
    document.body.classList.remove("sticky");
  },
   options);
  
  
  
  observer.observe(heroSection);
  
// sticky navbar end
 


p_btns.addEventListener("click", (e)=>{
    const p_btn_clicked = e.target;


    p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));
    p_btn_clicked.classList.add("p-btn-active");

    const btn_num = p_btn_clicked.dataset.btnNum;
    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`)
    p_img_elem.forEach((curElem) => curElem.classList.add('p-img-remove'))
    img_active.forEach((curElem) => curElem.classList.remove('p-img-remove'))


})
// swipper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    autoplay : {
      delay : 1500,
      disableOnInteraction : false,
    },
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  const Footer = document.querySelector('.section-footer')
  const scrooltoTop = document.createElement('div');
  scrooltoTop.classList.add('scrool-to-top');

  scrooltoTop.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`
  Footer.after(scrooltoTop)
 const scroll = ()=>{
    heroSectionTop.scrollIntoView({behavior : "smooth"})
  }
  scrooltoTop.addEventListener('click', scroll)

  const portfolioSec = document.querySelector('.section-portfolio');
  const contactSec = document.querySelector('.section-contact');
  document.querySelector('.portfolio-link').addEventListener("click", ()=>{
    portfolioSec.scrollIntoView({behavior : "smooth"})
  })
  document.querySelector('.contact-link').addEventListener("click",()=>{
    contactSec.scrollIntoView({behavior : "smooth"})
  })
  document.querySelector('.hereMe-btn').addEventListener("click",()=>{
    contactSec.scrollIntoView({behavior : "smooth"})
  })


 

  // navbar toggler----------------


const openSidebar = document.querySelectorAll('.open-toggle')
  const nav = document.querySelector('.header');

  openSidebar.forEach(element => {
    element.addEventListener("click",()=>{
      nav.classList.add('active')

    })
    
  });
  
 
  
// number animation
const numobserver = new IntersectionObserver((entries ,observer)=>{
  const [entry] = entries;
  
  if(!entry.isIntersecting) return
  const counterNum = document.querySelectorAll(".counter-number");
  const speed = 200;
  counterNum.forEach((curElem) =>{
    const updatenumber = ()=>{
        const targetNumber  = parseInt(curElem.dataset.number);

        const initialNumber = parseInt(curElem.innerText)
         const incrementalNumber = Math.trunc(targetNumber / speed);
        if(initialNumber < targetNumber){
          curElem.innerText = `${initialNumber + incrementalNumber}`
          setTimeout(updatenumber, 10)
        }

    }
    updatenumber()
  })
  
},{
  root : null,
  threshold : 0
})

numobserver.observe(numberAnimation)

// lazy-loadiing
const imgref = document.querySelector("img[data-src]");
const lazyImg = (entries)=>{
  const [entry]= entries;
  if(!entry.isIntersecting) return;
  entry.target.src = imgref.dataset.src
}
const imgObserver = new IntersectionObserver(lazyImg,
  {
    root : null,
    threshold : 0,
  })
  imgObserver.observe(imgref)
  
  const myJsMedia =(widthSize)=>{
if(widthSize.matches){
  new Swiper(".mySwiper", {
    slidesPerView: 1,
    autoplay : {
      delay : 1500,
      disableOnInteraction : false,
    },
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

}
else{
  new Swiper(".mySwiper", {
    slidesPerView: 2,
    autoplay : {
      delay : 1500,
      disableOnInteraction : false,
    },
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
  }

  const widthSize = window.matchMedia("(max-width : 780px)")
  myJsMedia(widthSize)
  widthSize.addEventListener("change", myJsMedia)