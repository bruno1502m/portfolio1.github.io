
  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })


/**topnav updates for each page*/
var projectsLink = document.getElementById("projects-link");
projectsLink.innerHTML = ">     projects";
projectsLink.href = "#projects";
projectsLink.style.fontWeight = "bold";

var aboutmeLink = document.getElementById("aboutme-link");
aboutmeLink.innerHTML = ">     about_me";
aboutmeLink.href = "aboutme.html";
aboutmeLink.style.fontWeight = "bold";

var galleryLink = document.getElementById("gallery-link");
galleryLink.innerHTML = ">     gallery";
galleryLink.href = "gallery.html";
galleryLink.style.fontWeight = "bold";

var letterLink = document.getElementById("contact-link");
letterLink.innerHTML = ">     contact";
letterLink.href = "contact.html";
letterLink.style.fontWeight = "bold";


  /* to attach projects in projects page*/
function redirectToCoffeeClub() {
  window.location.href = "https://bruno1502m.github.io/";
}

function redirectToComics() {
  window.location.href = " https://bruno1502m.github.io/Ham-The-Space-Monkey-Comic-main.github.io/";
}

function redirectToSound() {
  window.location.href = "https://bruno1502m.github.io/soundproject.github.io/";
}

function redirectToGoal() {
  window.location.href = "https://mirasaleh.github.io/video%20project/ind2.html";
}

 /* for carousel indicators*/
 $(document).ready(function() {
      // Activate Carousel
      $(".carousel").carousel();

      // Enable Carousel Indicators
      $(".carousel-indicators li").click(function() {
        $(".carousel-indicators li").removeClass("active");
        $(this).addClass("active");
      });

      // Enable Carousel Controls
      $(".carousel-control.left").click(function() {
        $(".carousel").carousel("prev");
      });

      $(".carousel-control.right").click(function() {
        $(".carousel").carousel("next");
      });
    });
