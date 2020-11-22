function checkbox() {
  var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("text");
  if (checkBox.checked == true){
    text.style.textDecoration = "line-through";
  } else {
     text.style.textDecoration = "none";
  }
}