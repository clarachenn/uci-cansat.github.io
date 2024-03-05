var question = document.getElementsByClassName("question");
for (var i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function() {
    /* toggle between hiding and showing the answer */
    this.classList.toggle("active");
    var answer = this.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
    }
    else {
      answer.style.display = "block";
    }
  });
}