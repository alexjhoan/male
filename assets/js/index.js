document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", toggleMenu);
  document.getElementById("inputFecha").value = new Date().toLocaleDateString();

  var menuItems = document.getElementsByClassName("menu-item");
  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", toggleMenu);
  }

  // new Glide(".glide", {
  //   type: "slider",
  //   startAt: 0,
  //   keyboard: true,
  //   perView: 1,
  // }).mount();
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
      var myText = document.createElement("p");
      form.style = "display:none";
      myText.innerHTML = "¡Consuta Enviada Exitosamente!";
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
