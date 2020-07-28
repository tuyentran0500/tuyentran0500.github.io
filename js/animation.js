function mode(image) {
  // var element = document.getElementsByClassName("content");
  // if (image == "sky") element.style.color = "black";
  // else element.style.color = "blanchedalmond";
  // alert(element.style.color);
  image = "img/" + image + ".jpg";
  image = "url('" + image + "')";
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
  else {
    var message = document.getElementById("secret");
    message.src = "";
  }
}

