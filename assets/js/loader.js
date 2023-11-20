// LOADER STUFF

document.addEventListener("DOMContentLoaded", function () {
  // Array of phrases with line breaks
  const phrases = [
    "<strong>Você sabia?</strong><br>Com 2.000 palavras você<br> entende 80% do inglês<br> falado 🤔",
    "<strong>A língua inglesa é incrível!</strong><br>Ela tem mais de 170.000<br> palavras! 📚",
    "<strong>Curiosidade:</strong><br>Existem mais de 50 sotaques<br> diferentes em inglês! 🗣️",
    "<strong>Fatos Interessantes:</strong><br>O inglês é a língua oficial<br> em 59 países! 🌎",
    "<strong>Vocabulário Rico:</strong><br>O inglês tem palavras para tudo, até para o<br> medo de ficar sem<br> celular (nomofobia)! 😱📱",
    "<strong>Origem Curiosa:</strong><br>O inglês tem influências do latim, <br>francês, alemão<br> e até mesmo do árabe! 🌍",
    "<strong>Palavras Longas:</strong><br>O inglês tem palavras enormes, como<br> 'pneumonoultramicroscopicsili<br>covolcanoconiosis'! 😮",
    "<strong>A língua do negócio:</strong><br>O inglês é a língua mais usada em<br> negócios e comércio internacional! 💼",
    "<strong>Idioma Universal:</strong><br>O inglês é a língua franca da<br> internet e da aviação! ✈️🌐",
    "<strong>Curiosidade:</strong><br>Algumas palavras em inglês não têm<br> tradução direta, como<br> 'awkward'! 🤷‍♂️",
  ];
  

  // Select a random phrase from the array
  const randomIndex = Math.floor(Math.random() * phrases.length);
  const randomPhrase = phrases[randomIndex];

  // Update the loader text with the random phrase
  const loaderPhrase = document.getElementById("loader-phrase");
  loaderPhrase.innerHTML = randomPhrase;

  // After some time (you can adjust the delay), hide the loader and display the content
  setTimeout(function () {
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".content").style.display = "block";
  }, 1000); // 2.1 seconds delay (adjust as needed) [bc of halloween change to less]
});


// Get the button element
var scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "block";
  } else {
      scrollToTopBtn.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
scrollToTopBtn.onclick = function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};