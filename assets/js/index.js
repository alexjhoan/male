$(window).on('load', function () {
  $('body').css('opacity', '1');
});

// fancyBox

$('[data-fancybox="gallery"]').fancybox({
  animationEffect: "fade",
  arrows: true,
  infobar: false,
  buttons: ["zoom", "close"]
});


// -----------------------Banner-Parallax----------------------

function bannerParallax() {
  let alturaHeader = $("#header").height();
  let myscroll = $(window).scrollTop();
  let el = $("#header");
  let el2 = $("#header2");
  let header = $("header");
  if (window.innerWidth > 991) {
    if (myscroll < alturaHeader * 1.0518) {
      el.css({
        position: "fixed"
        // 'background-position':'50% calc(20% - '+(.6*myscroll)+'px)'
      });
      el2.css({
        position: "fixed",
        opacity: myscroll / alturaHeader
        // 'background-position':'50% calc(20% - '+(.6*myscroll)+'px)'
      });
    } else {
      el.css({
        position: "absolute",
        bottom: 0
      });
      el2.css({
        position: "absolute",
        bottom: 0
      });
      header.css({
        position: "fixed",
        "z-index": 10
      });
    }
  }
}

function xs_bannerParallax() {
  let container = $("#header");
  let heightElem = container.height();
  let scroll = $(window).scrollTop();
  if (scroll >= 0 && scroll < heightElem) {
    let el = $("#header");
    el.css({
      "background-position": "center " + 0.4 * scroll + "px"
    });
  }
}

// -----------------------High-View-Paralax------------------------

function xs_highView() {
  let altura1 = $("#header").height();
  let altura2 = $("#subHeader").height();
  let altura3 = $("#project").height();
  let alturaTotal = altura1 + altura2;
  let myscroll = $(window).scrollTop();
  if (myscroll > alturaTotal) {
    let el = $("#highView");
    var scroll = $(document).scrollTop() - alturaTotal;
    let scroll2 = scroll - altura3 + 120;
    el.css({
      transform: "translate(30%, " + 0.3 * scroll2 + "px) scale(1.85)"
    });
  }
}

function md_highView() {
  let altura1 = $("#header").height();
  let altura2 = $("#subHeader").height();
  let altura3 = $("#project").height();
  let alturaTotal = altura1 + altura2;
  let myscroll = $(window).scrollTop();
  if (myscroll > alturaTotal) {
    let el = $("#highView");
    var scroll = $(document).scrollTop() - alturaTotal;
    let scroll2 = scroll - altura3 - 80;
    el.css({
      transform: "translateY(" + 0.3 * scroll2 + "px) scale(1.5)"
    });
  }
}

function lg_highView() {
  let altura1 = $("#header").height();
  let altura2 = $("#subHeader").height();
  let altura3 = $("#project").height();
  let alturaTotal = altura1 + altura2;
  let myscroll = $(window).scrollTop();
  if (myscroll > alturaTotal) {
    let el = $("#highView");
    var scroll = $(document).scrollTop() - alturaTotal;
    let scroll2 = scroll - altura3 - 80;
    el.css({
      transform: "translateY(" + 0.4 * scroll2 + "px) scale(1.3)"
    });
  }
}

function xl_highView() {
  let altura1 = $("#header").height() * 2;
  let altura2 = $("#subHeader").height();
  let altura3 = $("#project").height();
  let alturaTotal = altura1 + altura2;
  let myscroll = $(window).scrollTop();
  if (myscroll > alturaTotal) {
    let el = $("#highView");
    var scroll = $(document).scrollTop() - alturaTotal;
    let scroll2 = scroll - altura3 - 80;
    el.css({
      transform: "translateY(" + 0.4 * scroll2 + "px)"
    });
  }
}

function highView() {
  if (window.innerWidth > 992) {
    xl_highView();
  }
  if (window.matchMedia("(min-width: 768px) and (max-width: 991px)").matches) {
    lg_highView();
  }
  if (window.matchMedia("(min-width: 576px) and (max-width: 767px)").matches) {
    md_highView();
  }
  if (window.innerWidth < 576) {
    xs_highView();
  }
}

// ------------------------------Amenities-Parallax-----------------------------

function amenities() {
  let container = $("#amenities");
  let heightTop = container.position().top;
  let scroll = $(window).scrollTop();
  let heightElem = container.height();
  let suma = scroll - heightTop;
  if (scroll > heightTop - heightElem && scroll < heightTop + heightElem) {
    let el = $("#edfAmenities");
    el.css({
      transform: "translateY(calc(-30px + " + 0.15 * suma + "px))"
    });
  }
  if (scroll > heightTop - heightElem && scroll < heightTop + heightElem) {
    let el = $("#linea-turquesa");
    el.css({
      transform: "translateY(calc(-30px + " + 0.08 * suma + "px))"
    });
  }
}

// -------------------------Water-Backgroud-Parallax-----------------------------

function xs_subHeader() {
  let container = $("#subHeader");
  let heightTop = container.position().top;
  let scroll = $(window).scrollTop();
  let heightElem = container.height();
  let suma = scroll - heightTop;
  if (scroll > heightTop - heightElem && scroll < heightElem + heightTop) {
    let el = $("#subHeader");
    el.css({
      "background-position-y": 0.4 * suma + "px"
    });
  }
}

function lg_subHeader() {
  let container = $("#subHeader");
  let heightTop = container.position().top;
  let scroll = $(window).scrollTop();
  let heightElem = container.height();

  let suma = scroll - heightElem * 3;

  if (scroll > heightElem && scroll < heightElem * 3) {
    let el = $("#subHeader");
    el.css({
      "background-position-y": 0.4 * suma + "px"
    });
  }
}

function bg_subHeader() {
  if (window.innerWidth < 992) {
    xs_subHeader();
  } else {
    lg_subHeader();
  }
}

function bg_contacto() {
  let container = $("#contacto");
  let heightTop = container.position().top;
  let scroll = $(window).scrollTop();
  let heightElem = container.height();
  let suma = scroll - heightTop;
  if (scroll > heightTop - heightElem) {
    let el = $("#contacto");
    el.css({
      "background-position-y": 0.4 * suma + "px"
    });
  }
}

// ---------------------------title-hidden--------------------------

// determina si un elemento comienza a ser visible
function isElementVisible(container) {
  let viewScrollTop = $(window).scrollTop(); // distancia de scroll superior
  let viewBottom = viewScrollTop + $(window).height(); // distancia de scroll + el alto actual de window (lo no visible por scroll + lo visible)
  let topElemD = $(container).offset().top + 250; // distancia desde el elemento hasta el tope superior del viewport prueba despues eliminar
  return topElemD < viewBottom;
}

// ------------------------All-Parallax------------------------------

$(function () {
  $(window).scroll(function () {
    if (window.innerWidth < 992) {
      xs_bannerParallax();
    } else {
      bannerParallax();
    }
    bg_subHeader();
    highView();
    amenities();
    bg_contacto();

    let container = $("#project");
    let elem = $("#project .titleHidden");
    isElementVisible(container) ? elem.addClass("titleShow") : null;

    let container1 = $("#location");
    let elem1 = $("#location .titleHidden");
    isElementVisible(container1) ? elem1.addClass("titleShow") : null;

    let container2 = $("#units");
    let elem2 = $("#units .titleHidden");
    isElementVisible(container2) ? elem2.addClass("titleShow") : null;

    let container3 = $("#amenities");
    let elem3 = $("#amenities .titleHidden");
    isElementVisible(container3) ? elem3.addClass("titleShow") : null;

    let container4 = $("#rental");
    let elem4 = $("#rental .titleHidden");
    isElementVisible(container4) ? elem4.addClass("titleShow") : null;

    let container5 = $("#contacto");
    let elem5 = $("#contacto .titleHidden");
    isElementVisible(container5) ? elem5.addClass("titleShow") : null;
  });
});

  // validacion de el formulario
(function () {
    "use strict";
    window.addEventListener(
      "load",
      function () {
        var forms = document.getElementsByClassName("needs-validation");
        var validation = Array.prototype.filter.call(forms, function (form) {
          form.addEventListener(
            "submit",
            function (event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              } else {
                submited();
              }
              form.classList.add("was-validated");
            },
            false
          );
        });
      },
      false
    );
  }
)();

function submited() {
  var form = document.querySelector("#contacto form");
  var data = serialize(form);
  postAjax(
    "https://www.infocasas.com.uy/?mid=formulario&func=ajax_save",
    data,
    function () {
      var anchor = document.querySelector("#contacto .left");
      var myText = document.createElement("h3");
      form.style = "display:none";
      myText.innerHTML =
        "¡Consulta enviada con éxito!<br />En breve un asesor se comunicará contigo.";
      anchor.appendChild(myText);
      myText.setAttribute("id", "submitedForm");
    }
  );
}

function serialize(form) {
  // Setup our serialized data
  var serialized = [];

  // Loop through each field in the form
  for (var i = 0; i < form.elements.length; i++) {
    var field = form.elements[i];

    // Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
    if (
      !field.name ||
      field.disabled ||
      field.type === "file" ||
      field.type === "reset" ||
      field.type === "submit" ||
      field.type === "button"
    )
      continue;

    // If a multi-select, get all selections
    if (field.type === "select-multiple") {
      for (var n = 0; n < field.options.length; n++) {
        if (!field.options[n].selected) continue;
        serialized.push(
          encodeURIComponent(field.name) +
            "=" +
            encodeURIComponent(field.options[n].value)
        );
      }
    }

    // Convert field data to a query string
    else if (
      (field.type !== "checkbox" && field.type !== "radio") ||
      field.checked
    ) {
      serialized.push(
        encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value)
      );
    }
  }
  return serialized.join("&");
}

function postAjax(url, data, success) {
  var params =
    typeof data == "string"
      ? data
      : Object.keys(data)
          .map(function (k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
          })
          .join("&");

  var xhr = window.XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject("Microsoft.XMLHTTP");
  xhr.open("POST", url);
  xhr.onreadystatechange = function () {
    if (xhr.readyState > 3 && xhr.status == 200) {
      success(xhr.responseText);
    }
  };
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send(params);
  return xhr;
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", toggleMenu);
  document.getElementById("inputFecha").value = new Date().toLocaleDateString();

  var menuItems = document.getElementsByClassName("menu-item");
  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", toggleMenu);
  }
});

function toggleMenu() {
  const element = document.getElementById("menu");
  element.classList.toggle("show");
}

function autoProgress(dateInit, dateEnd, IdProgress, IdImpPercentage) {
  let nowDate = new Date().getTime();
  let initDate = new Date(dateInit).getTime();
  let endDate = new Date(dateEnd).getTime();
  let width = $(`#${IdProgress}`)
  if ((nowDate > initDate) && (nowDate < endDate)) {
    let progress = ((nowDate - initDate) / (endDate - initDate)) * 100
    $(width).css('width', `${Math.ceil(progress)}%`);
    $('#textBuild').html(`Construido`)
    $(`#${IdImpPercentage}`).html(`${Math.ceil(progress)}%`)
  } else if(nowDate < initDate){
    $(width).css('width', '1%');
  } else if (nowDate > endDate) {
    $(width).css('width', '100%');
  }
}

//---------------------------------Gallery-Advance----------------------------------

if (screen.width > 991){
  $("#lightgallery").lightGallery();
  const items =  $('#lightgallery a').length;
  const imgInit = 8
  const ImgMore = 4
  $('#lightgallery a:lt('+imgInit+')').show();
  if(imgInit >= items) {
    $('.btnMore').hide()
  }
  function seeMore() {
    let visibleItems = $('#lightgallery a:visible').length + ImgMore
    $('#lightgallery a:lt('+visibleItems+')').fadeIn(800);
    if(visibleItems >= items) {
      $('.btnMore').hide();
    }
  }
} else {
  $("#lightgallery").addClass("owl-carousel owl-theme")
  $("#lightgallery").lightGallery();
  $('#advance .owl-carousel').owlCarousel({
    loop:false,
    margin:15,
    nav:false,
    dots: true,
    responsive:{
      0:{
        items:1
      },
      575:{
        items:2
      },
    }
  })
}

$(document).ready(function () {
  autoProgress('2020/11/01', '2022/08/01', 'progressBar', 'IdImpPercentage')
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    nav: true,
    items: 1
  });
});

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Vendido', 'No Vendido'],
        datasets: [{
            label: ['87%','13%'],
            backgroundColor: ['#569894','#cecece'],
            borderColor: '#cecece',
            borderWidth: 0,
            data: [87,13],
        }]
    },

    // Configuration options go here
    options: {
      cutoutPercentage: 65,
      tooltips: false,
        legend: {
            display: false,
        }
    }
});
