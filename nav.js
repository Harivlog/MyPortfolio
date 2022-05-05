
  // navbar toggler----------------


  const openSidebar = document.querySelectorAll('.open-toggle')
  const nav = document.querySelector('.header');

  openSidebar.forEach(element => {
    element.addEventListener("click",()=>{
      nav.classList.add('active')
   
    })
    
  });