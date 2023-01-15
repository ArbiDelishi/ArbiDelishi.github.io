/**
* Template Name: iPortfolio - v3.10.0
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)

  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Hero type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }
  
 

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()


// Get the modal
var modalFabbrica = document.getElementById("laFabbricaDelleParoleModal");

// Get the button that opens the modal
var btnFabbrica = document.getElementById("laFabbricaDelleParoleBtn");

// Get the <span> element that closes the modal
var spanFabbrica = document.getElementById("closeFabbrica");

// When the user clicks on the button, open the modal
btnFabbrica.onclick = function() {
  modalFabbrica.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanFabbrica.onclick = function() {
  modalFabbrica.style.display = "none";
}



// Get the modal
var modalSognare = document.getElementById("nonSmettereMaiDiSognareModal");

// Get the button that opens the modal
var btnSognare = document.getElementById("nonSmettereMaiDiSognareBtn");

// Get the <span> element that closes the modal
var spanSoganre = document.getElementById("closeSognare");

// When the user clicks on the button, open the modal
btnSognare.onclick = function() {
  modalSognare.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanSoganre.onclick = function() {
  modalSognare.style.display = "none";
}


// Get the modal
var modalOsole = document.getElementById("osoleMioModal");

// Get the button that opens the modal
var btnOsole = document.getElementById("osoleMioBtn");

// Get the <span> element that closes the modal
var spanOsole = document.getElementById("closeSole");

// When the user clicks on the button, open the modal
btnOsole.onclick = function() {
  modalOsole.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanOsole.onclick = function() {
  modalOsole.style.display = "none";
}





// Get the modal
var modalRooftop = document.getElementById("rooftopModal");

// Get the button that opens the modal
var btnRooftop = document.getElementById("rooftopBtn");

// Get the <span> element that closes the modal
var spanRooftop = document.getElementById("closeRooftop");

// When the user clicks on the button, open the modal
btnRooftop.onclick = function() {
  modalRooftop.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanRooftop.onclick = function() {
  modalRooftop.style.display = "none";
}




// Get the modal
var modalSirane = document.getElementById("siraneModal");

// Get the button that opens the modal
var btnSirane = document.getElementById("siraneBtn");

// Get the <span> element that closes the modal
var spanSirane = document.getElementById("closeSirane");

// When the user clicks on the button, open the modal
btnSirane.onclick = function() {
  modalSirane.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanSirane.onclick = function() {
  modalSirane.style.display = "none";
}




// Get the modal
var modalColore = document.getElementById("coloreModal");

// Get the button that opens the modal
var btnColore = document.getElementById("coloreBtn");

// Get the <span> element that closes the modal
var spanColore = document.getElementById("closeColore");

// When the user clicks on the button, open the modal
btnColore.onclick = function() {
  modalColore.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanColore.onclick = function() {
  modalColore.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalColore) {
    modalColore.style.display = "none";
  } else if (event.target == modalRooftop) {
    modalRooftop.style.display = "none";
  }  else if (event.target == modalOsole) {
    modalOsole.style.display = "none";
  }  
  else if (event.target == modalSirane) {
    modalSirane.style.display = "none";
  }  
  else if (event.target == modalSognare) {
    modalSognare.style.display = "none";
  }  
  else if (event.target == modalFabbrica) {
    modalFabbrica.style.display = "none";
  }  
}

