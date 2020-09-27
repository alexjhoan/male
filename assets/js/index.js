// fancyBox

$('[data-fancybox="gallery"]').fancybox({
  animationEffect: "fade",
  arrows: false,
  infobar: false,
  buttons: [
    "zoom",
    "close"
  ]
});

// OwlCarousel

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop:true,
    margin:10,
    dots: true,
    nav:true,
    items:1
  });
});

// parallax efects

$(function() {
  $(window).scroll(function() {
    let alturaHeader = $('#header').height()
    let myscroll = $(window).scrollTop()
    if (myscroll < alturaHeader ){
      let el = $('#header');
      var scroll = $(document).scrollTop();
      el.css({'background-position':'50% calc(30% + '+(.4*scroll)+'px)'});
    }
  });
});



function imgParallax() {
  let checkWidth = jQuery(window).width();
  if (window.innerWidth > 768) {
    $(function() {
      $(window).scroll(function() {
        let altura1 = $('#header').height()
        let altura2 = $('#subHeader').height()
        let altura3 = $('#project').height()
        let alturaTotal = altura1 + altura2
        let myscroll = $(window).scrollTop()
        if (myscroll > alturaTotal ){
          let el = $('#highView');
          var scroll = $(document).scrollTop() - alturaTotal
          let scroll2 = scroll - altura3
          el.css({
            'transform':'translateY('+(.4*scroll2)+'px)'
          });
        }
      });
    });
  }

  if (window.matchMedia("(min-width: 576px) and (max-width: 767px)").matches) {
    $(function() {
      $(window).scroll(function() {
        let altura1 = $('#header').height()
        let altura2 = $('#subHeader').height()
        let altura3 = $('#project').height()
        let alturaTotal = altura1 + altura2
        let myscroll = $(window).scrollTop()
        if (myscroll > alturaTotal ){
          let el = $('#highView');
          var scroll = $(document).scrollTop() - alturaTotal
          let scroll2 = scroll - altura3
          el.css({
            'transform':'translate(15%, '+(.4*scroll2)+'px) scale(1.5)'
          });
        }
      });
    });
  }

  if (window.innerWidth < 576) {
    $(function() {
      $(window).scroll(function() {
        let altura1 = $('#header').height()
        let altura2 = $('#subHeader').height()
        let altura3 = $('#project').height()
        let alturaTotal = altura1 + altura2
        let myscroll = $(window).scrollTop()
        if (myscroll > alturaTotal ){
          let el = $('#highView');
          var scroll = $(document).scrollTop() - alturaTotal
          let scroll2 = scroll - altura3 + 140
          el.css({
            'transform':'translate(30%, '+(.4*scroll2)+'px) scale(1.85)'
          });
        }
      });
    });
  }
}


  imgParallax()
  jQuery(window).resize(imgParallax);




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
      myText.innerHTML = "¡Consulta enviada con éxito!<br />En breve un asesor se comunicará contigo.";
      anchor.appendChild(myText);
      gtag("event", "form_submit_complete", {
        event_label: "consulta",
        event_category: "form_submit",
        value: 1,
      });
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
