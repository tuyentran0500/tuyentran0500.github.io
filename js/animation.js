function mode(image) {
  image = "img/" + image + ".jpg";
  image = "url('" + image + "')";
  // alert(image);
  var element = document.getElementById("body");
  element.style.backgroundImage = image;
}
function reset(check){
  if (!check){
    image = "url('img/nightsky.jpg')";
    var element = document.getElementById("body");
    element.style.backgroundImage = image;
    // alert("Done");
  }
}
function checkPass(){
  var element = document.getElementById("password");
  if (element.value == "2105"){
    var message = document.getElementById("secret");
    message.src = "img/jung so min.jpg";
    // message.style.width = "200px";
    // message.style.height = "300px";
  }
}

