// Parallaxing + add class active on scroll
$(document).scroll(function () { 
     
    // add class active to nav a on scroll
    var scrollPos = $(document).scrollTop() + 100;   
    
    // changing padding of nav a on scroll
      if (scrollPos > 250) {
        $('nav a').addClass('small');
        $('nav img').addClass('move');
        $('nav span').removeClass('movetext');
      } else {
        $('nav a').removeClass('small');
        $('nav img').removeClass('move');
        $('nav span').addClass('movetext');
      }
    
  });

  /**
   * Méthode de sleep
   * @param {*} ms temps d'attente en ms
   */
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }