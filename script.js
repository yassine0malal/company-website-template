document.querySelector('.arrow').addEventListener("mouseenter", function() {
    document.querySelector('.top').classList.add('highlight-top');
});
document.querySelector('.arrow').addEventListener('mouseleave', function() {
  document.querySelector('.top').classList.remove('highlight-top');

});


document.querySelector('.arrow').addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // document.body.scrollTop = 0; // For Safari
    // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});