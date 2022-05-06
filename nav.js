
  // navbar toggler----------------


  const openSidebar = document.querySelector('.mobile-navbar-btn')
  const nav = document.querySelector('.header');

  // openSidebar.forEach(element => {
    openSidebar.addEventListener("click",()=>{
      nav.classList.toggle('active')
   
    })
    
  