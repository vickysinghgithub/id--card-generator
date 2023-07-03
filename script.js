document.querySelectorAll("button")[0].addEventListener("click", fun);
function fun() {
  var randimg1 = "background-color:  white";
  document.querySelector("#l3").setAttribute("style", randimg1);

  var randimg1 = "background-color:  black";
  document.querySelector("#l2").setAttribute("style", randimg1);

  var randimg1 = "color:  black";
  document.querySelector("#l1").setAttribute("style", randimg1);
}

var pictureInput = document.getElementById("pictureInput");
var previewImage = document.getElementById("previewImage");

pictureInput.addEventListener("change", function (event) {
  var file = event.target.files[0];
  var reader = new FileReader();

  reader.onload = function () {
    var dataURL = reader.result;
    previewImage.src = dataURL;
  };

  reader.readAsDataURL(file);
});

document
  .getElementById("new-quote-btn")
  .addEventListener("click", generateIDCard);

function generateIDCard() {
  var name = document.getElementById("nameInput").value;
  var college = document.getElementById("collegeInput").value;
  var location = document.getElementById("locationInput").value;

  var fileInput = document.getElementById("pictureInput");
  var file = fileInput.files[0];
  var reader = new FileReader();

  reader.onload = function () {
    var pictureURL = reader.result;

    document.getElementById("l2").innerHTML = `
      <img src="${pictureURL}" alt="Student Picture" style="position: absolute; color:aliceblue; left:10px; z-index: 100; top:90px; max-width: 120px; max-height: 120px;">
      <h4 style="position: absolute; color:rgb(7, 0, 57); left:160px; z-index: 100; top:40px;">Name: ${name}</h4>
      <h4 style="position: absolute; color:rgb(7, 0, 57); left:160px; z-index: 100; top:100px;">College Name: ${college}</h4>
      <h4 style="position: absolute; color:rgb(7, 0, 57); left:160px; z-index: 100; top:160px;">Location: ${location}</h4>
    `;
  };

  reader.readAsDataURL(file);
}
