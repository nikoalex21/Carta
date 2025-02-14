$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
  }
  function close() {
    envelope.addClass("close").removeClass("open");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const lines = document.querySelectorAll(".words");
  let delay = 500; // Tiempo de espera antes de empezar

  lines.forEach((line, index) => {
    const text = line.textContent;
    line.textContent = ""; // Borra el texto original

    setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          line.textContent += text[i];
          i++;
        } else {
          clearInterval(interval);
        }
      }, 50); // Velocidad de escritura (ajustable)
    }, delay);
    
    delay += text.length * 50 + 500; // Ajustar el tiempo para cada línea
  });
});

