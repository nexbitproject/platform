//GLOBAL CONFIGURATION FOR SCROLL ANIMATIONS
AOS.init({
  offset: 0,
  duration: 700,
  easing: 'ease',
  delay: 0,
  disable: 'mobile',
  once: true
});

//CONTACT FORM
$(function () {
  'use strict';
  $("#contact-form").validator(), $("#contact-form").on("submit", function (t) {
    if (!t.isDefaultPrevented()) {
      return $.ajax({
        type: "POST",
        url: "contact.php",
        data: $(this).serialize(),
        success: function (t) {
          var a = "alert-" + t.type,
            e = t.message,
            s = '<div class="alert ' + a + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + e + "</div>";
          a && e && ($("#contact-form").find(".messages").html(s), $("#contact-form")[0].reset())
        }
      }), !1
    }
  })
});
/* Faq */
const items = document.querySelectorAll(".accordion a");

function toggleAccordion() {
  'use strict';
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}
items.forEach(item => item.addEventListener('click', toggleAccordion));

// preloader
$("#fakeLoader").fakeLoader();
// preloader call ends here

/* Javascript code for pricing tables */
var e = document.getElementById("filt-monthly"),
    d = document.getElementById("filt-date"),
    t = document.getElementById("switcher"),
    m = document.getElementById("monthly"),
    y = document.getElementById("yearly");

e.addEventListener("click", function() {
    t.checked = false;
    e.classList.add("toggler--is-active");
    d.classList.remove("toggler--is-active");
    m.classList.remove("hide");
    y.classList.add("hide");
});

d.addEventListener("click", function() {
    t.checked = true;
    d.classList.add("toggler--is-active");
    e.classList.remove("toggler--is-active");
    m.classList.add("hide");
    y.classList.remove("hide");
});

t.addEventListener("click", function() {
    d.classList.toggle("toggler--is-active");
    e.classList.toggle("toggler--is-active");
    m.classList.toggle("hide");
    y.classList.toggle("hide");
})

// Javascript code for typewriter
var TxtType = function (el, toRotate, period) {
  "use strict";
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  "use strict";
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  "use strict";
  var elements = document.getElementsByClassName('typewrite');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.06em solid #14d468}";
  document.body.appendChild(css);
};
