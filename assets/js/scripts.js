// Our own scripts

// function dropSorgu() {
//     var allCreate = document.getElementsByClassName("allCreate");
//     allCreate.classList.toggle("activeMenu");
// }

// Generate a password string

// function shuffleArray(array) {
//   var myArray = [];
//   var m = array.length, t, i;

// while (m) {

//   i = Math.floor(Math.random() * m--);

//   t = array[m];
//   array[m] = array[i];
//   array[i] = t;

//   console.log(array[i]);
//   }

//   return array;
// }

function randString(id) {
  var dataSet = $(id).attr("data-character-set").split(",");

  var possible = "";
  var capitalLetters = "";
  var smallLetters = "";
  var numbers = "";
  var characters = "";

  if ($.inArray("a-z", dataSet) >= 0) {
    smallLetters += "abcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 2; i++) {
      possible += smallLetters.charAt(
        Math.floor(Math.random() * smallLetters.length)
      );
    }
  }
  if ($.inArray("A-Z", dataSet) >= 0) {
    capitalLetters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 0; i < 2; i++) {
      possible += capitalLetters.charAt(
        Math.floor(Math.random() * capitalLetters.length)
      );
    }
  }
  if ($.inArray("0-9", dataSet) >= 0) {
    numbers += "0123456789";
    for (var i = 0; i < 2; i++) {
      possible += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
  }
  if ($.inArray("#", dataSet) >= 0) {
    characters += "![]{}()%&*$#^<>~@|";
    for (var i = 0; i < 2; i++) {
      possible += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
  }

  //   var randomIndex;
  //     var temp;

  //   for (var i = possible.length; i > 0; i--) {

  //    randomIndex = Math.floor(Math.random() * i);
  //   var currentElement = possible.charAt(i);
  //   var randomElement = possible.charAt(randomIndex);

  //  temp = currentElement;
  //  currentElement = possible[randomIndex];
  //   randomElement = temp;

  //   }

  return possible;
}

$(document).ready(function () {
  $("select")
    .change(function () {
      $(this)
        .find("option:selected")
        .each(function () {
          var optionValue = $(this).attr("value");
          if (optionValue) {
            $(".box")
              .not("." + optionValue)
              .hide();
            $("." + optionValue).show();
          } else {
            $(".box").hide();
          }
        });
    })
    .change();
});

// Create a new password
$(".input-group-append").click(function () {
  var field = $(this).closest("div").find('input[rel="gp"]');
  field.val(randString(field));
});

// Auto Select Pass On Focus
$('input[rel="gp"]').on("click", function () {
  $(this).select();
});

$(".edit-button").click(function () {
  $("#edit-modal").modal("show");
});

$(".cancel-button").click(function () {
  $(this).modal("hide");
});

$(".save-delete-button").click(function () {
  alert("Dəyişikliklər qeyd olundu");
});

$(".delete-button").click(function () {
  $("#delete-modal").modal("show");
});

$(".remove-button").click(function () {
  $("#remove-modal").modal("show");
});

$(".add-button").click(function () {
  location.href = "newUser.html";
});

$("#sidebarCollapse").on("click", function () {
  if (screen.width >= 769) {
    $("#sidebar").toggleClass("active");
    $("#content").toggleClass("mobileContent");
  } else if (screen.width <= 768) {
    $("#sidebar").toggleClass("mobileActiveMenu");
    $("#sideH2").toggleClass("sideH2");
    var sideElements = document.querySelectorAll("#sideSpan");
    $(sideElements).toggleClass("sideSpan");
    $("#content").toggleClass("mobileContent2");
  }
});

$(".users-nav").on("click", function () {
  $(this).next("ul").toggleClass("dropdown");
});

$(".surveys").on("click", function () {
  $(this).next("ul").toggleClass("dropdown");
});

$(".save").click(function () {
  if (
    $("#username").val() != "" &&
    $("#firstname").val() != "" &&
    $("#lastname").val() != "" &&
    $("#phone").val() != "" &&
    $("#email").val() != "" &&
    $("#newpassword").val() != "" &&
    $("#newpassword").val() != "" &&
    $("#newpassword2").val() != ""
  ) {
    alert("Dəyişikliklər qeyd olundu");
  }
});

$(".create-button").click(function () {
  if (
    $("#username").val() != "" &&
    $("#firstname").val() != "" &&
    $("#lastname").val() != "" &&
    $("#phone").val() != "" &&
    $("#email").val() != "" &&
    $("#password").val() != ""
  ) {
    alert("Yeni istifadəçi əlavə olundu");
  }
});

$(".save-changes-button").click(function () {
  if (
    $("#username").val() != "" &&
    $("#firstname").val() != "" &&
    $("#lastname").val() != "" &&
    $("#phone").val() != "" &&
    $("#email").val() != "" &&
    $("#password").val() != ""
  ) {
    alert("Dəyişikliklər  əlavə olundu");
  }
});

// profile save info

$(document).ready(function () {
  $("#profileForm").submit(function () {
    alert("Məlumatlar uğurla yadda saxlanıldı");
  });
});
//addInfo function in newForm page

function addInfo() {
  alert("Məlumatlar uğurla yadda saxlanıldı");
}

//tesdiqle
function confirm() {
  alert("Form uğurla təsdiqləndi");
}

//diger buttonu

$("#other").one("click", function () {
  var parent = document.querySelector("#addOther");
  var newLabel = document.createElement("label");
  var newInput = document.createElement("input");
  newLabel.className = "newLabelClass";
  newInput.className = "addOtherClass";
  newInput.type = "text";
  newLabel.appendChild(document.createTextNode("Digər"));
  newLabel.appendChild(newInput);
  parent.appendChild(newLabel);
});

// Remove other button
function removeOther() {
  var other = document.getElementById("addOther");
  try {
    other.removeChild(other.childNodes[0]);
  } catch (error) {
    console.log("Unable to delete node");
  }
}

//variant elave et buttonu

function addSelect() {
  var activeType = document.getElementsByClassName("box");
  let other = document.getElementsByClassName("digertype");
  for (let o = 0; o < other.length; o++) {
    try {
      other[o].parentElement.remove();
    } catch (error) {
      console.log(error);
    }
  }

  for (let i = 0; i < activeType.length; i++) {
    if (activeType[i].style.display == "block") {
      let newLabel = document.createElement("label");
      let elemType = document.createElement("input");
      let elemText = document.createElement("input");
      let br = document.createElement("br");
      elemType.setAttribute(
        "type",
        activeType[i].childNodes[1].childNodes[0].type
      );
      elemText.setAttribute("type", "text");
      elemText.className = "text";
      elemText.value = "Yeni Variant";
      activeType[i].appendChild(newLabel);
      newLabel.appendChild(elemType);
      newLabel.appendChild(elemText);
      newLabel.parentNode.append(br);
    }
  }

  for (let i = 0; i < activeType.length; i++) {
    if (activeType[i].style.display == "block") {
      newLabel.appendChild(document.createTextNode("Digər"));
      newLabel.appendChild(newInput);
      activeType[i].appendChild(newLabel);
    }
  }
}

//sual elave et

function addQuestion() {
  var activeType = document.getElementsByClassName("box");
  var formAdd = document.getElementById("form");
  var other = document.getElementById("addOther").cloneNode(true);
  other.removeAttribute("id");

  var question = document.getElementById("question-input").cloneNode(true);
  question.removeAttribute("id");
  var answers = null;
  for (let i = 0; i < activeType.length; i++) {
    if (activeType[i].style.display == "block") {
      try {
        answers = activeType[i].cloneNode(true);
        answers.classList.remove("box");
      } catch (error) {
        console.log(error);
      }
    }
  }

  formAdd.appendChild(question);
  formAdd.appendChild(answers);
  formAdd.appendChild(other);
  removeOther();
}
