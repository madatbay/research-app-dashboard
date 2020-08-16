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
  $("#sidebar").toggleClass("active");
});

$(".users").on("click", function () {
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
  $("form").submit(function () {
    alert("Məlumatlar uğurla yadda saxlanıldı");
  });
});

//tesdiqle
function confirm() {
  alert("Form uğurla təsdiqləndi");
}

// form

// var form = document.querySelector("#form");
// var title = document.querySelector("#title");
// var description = document.querySelector("#description");
// var addForm = document.querySelector("#addForm");
// var other = document.querySelector("#other");
// var addQuestion = document.querySelector("#addQuestion");

// eventListeners();

// function eventListeners() {  //butun funksiyalar
//    form.addEventListener("submit",addForm);
// }

// function addForm(e) {
//   const newTitle = title.value;
//   console.log(newTitle);

//   e.preventDefault();
// }

//diger buttonu

function addOther() {
  var parent = document.querySelector("#addOther");
  var newLabel = document.createElement("label");
  var newInput = document.createElement("input");
  newLabel.className = "newLabelClass";
  newInput.className = "addOtherClass";
  newInput.type = "text";
  newLabel.appendChild(document.createTextNode("Digər"));
  newLabel.appendChild(newInput);
  parent.appendChild(newLabel);
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
      elemText.value = "New Variant";
      activeType[i].appendChild(newLabel);
      newLabel.appendChild(elemType);
      newLabel.appendChild(elemText);
      newLabel.parentNode.append(br);
    }
  }
  let newLabel = document.createElement("label");
  let newInput = document.createElement("input");
  newInput.type = "text";
  newInput.className = "digertype";

  for (let i = 0; i < activeType.length; i++) {
    if (activeType[i].style.display == "block") {
      newLabel.appendChild(document.createTextNode("Digər"));
      newLabel.appendChild(newInput);
      activeType[i].appendChild(newLabel);
    }
  }
}

function addQuestion() {
  var activeType = document.getElementsByClassName("box");
  var formAdd = document.getElementById("form");

  var question = document.getElementById("question-input").cloneNode(true);
  question.removeAttribute("id");
  console.log(question.value);
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
}
