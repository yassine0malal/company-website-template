document.querySelector('.arrow').addEventListener("mouseenter", function() {
  if(window.innerWidth > 360){
    document.querySelector('.top').classList.add('highlight-top');
  }
});
document.querySelector('.arrow').addEventListener('mouseleave', function() {
  if(window.innerWidth > 360){
  document.querySelector('.top').classList.remove('highlight-top');
  }
});


document.querySelector('.arrow').addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // document.body.scrollTop = 0; // For Safari
    // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});


// Toggle phone menu visibility
document.addEventListener('DOMContentLoaded', function() {
//   if(window.innerWidth < 500){
// document.querySelector('.navigation').style.display = 'none';
//   }
  const menuIcon = document.querySelector('.menu');
  const phoneMenu = document.querySelector('.phone-menu');

  menuIcon.addEventListener("click",function(){
    if(window.innerWidth > 500){
      return; // Do nothing if the window width is greater than 500px
    }
    phoneMenu.style.display = (phoneMenu.style.display === 'block') ? 'none' : 'block';
    
  });
  })

window.addEventListener('resize',function(){
  const phoneMenu = document.querySelector('.phone-menu');
  if(window.innerWidth > 500){
    phoneMenu.style.display = 'none';
  }
})