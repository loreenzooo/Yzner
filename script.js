document.addEventListener('DOMContentLoaded', function() {
    const seeMoreLinks = document.querySelectorAll('.see-more');
  
    seeMoreLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const moreContent = this.closest('.blog-details').querySelector('.more-content');
        moreContent.classList.toggle('show');
        this.textContent = moreContent.classList.contains('show') ? 'SEE LESS' : 'SEE MORE';
      });
    });
  });
  