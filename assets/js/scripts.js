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

$(".reset-button").click(function () {
  $("#reset-modal").modal("show");
});

$(".add-button").click(function () {
  location.href = "newUser.html";
});

$("#sidebarCollapse").on("click", function () {
  if (screen.width >= 769) {
    $("#sidebar").toggleClass("active");
    $("#content").toggleClass("mobileContent");
  } 
});

$(".mobileMenuIcon").on("click", function () {
    $("#sidebar").toggleClass("mobileMenu");
    if($("#sidebar").css("display")=="flex")
    {
        $("html").css("overflow","hidden");
    }
    else {
        $("html").css("overflow","auto");
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
  newLabel.id = "otherid"
  newInput.className = "addOtherClass";
  newInput.id = "otherTextid"
  newInput.type = "text";
  newLabel.appendChild(document.createTextNode("Digər"));
  newLabel.appendChild(newInput);
  parent.appendChild(newLabel);
});

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
  var formDelete = document.createElement('BUTTON');
  var text = document.createTextNode("Sil"); 
  formDelete.appendChild(text); 
  formDelete.setAttribute("id","deleteForm");
  formDelete.setAttribute("type","button")
  formDelete.setAttribute("class","btn btn-outline-danger");
  formDelete.setAttribute("onclick","deleteBtn(this)");

  var activeType = document.getElementsByClassName("box");
  var formAdd = document.getElementById("addQstn");
  
  
 
  var question = document.getElementById("question-input").cloneNode(true);

  question.removeAttribute("id");
  question.setAttribute("id", "deleteQstn");

  console.log(question.value); 
  var answers = null;
  for (let i = 0; i < activeType.length; i++) {
    if (activeType[i].style.display == "block") {
      try {
        answers = activeType[i].cloneNode(true);
        answers.classList.remove("box");
        answers.setAttribute("id","deleteAnsw")
      } catch (error) {
        console.log(error);
      }
    }
  }

  var other = document.getElementById("otherid");
  console.log(other)
  if($(other).length !== 0){
    var otherType = document.getElementById("otherid").cloneNode(true);
    otherType.removeAttribute("id");
  }
  else{
    // alert("2")
  }
  linebreak = document.createElement("br");
  
   /**********************COUNT************* */
 



  formAdd.appendChild(question);
  formAdd.appendChild(answers);
  if($(other).length !== 0){
      formAdd.appendChild(otherType)
  }
  formAdd.appendChild(formDelete);
  formAdd.appendChild(linebreak);

  var form = document.forms["qstnForm"];
  var inputs = form.querySelectorAll("input#deleteQstn");





  // console.log(inputs.length)
    for (var i = 1; i <= inputs.length; i++) {
      var span = document.createElement('span');
      // console.log(i)
     inputs.toString();
     console.log(inputs.html)
     output = inputs[i];
     console.log(output)
     var content = document.createTextNode(output);
     span.appendChild(content);
     console.log(content)
     var before = document.querySelector("#addQstn.templateInput");
     document.body.insertBefore(span, before)
    //   inputs[i].parentNode.insertBefore(span, inputs[i].nextElementSibling)
    //   // (function (index) {
    //   //     span.innerHTML = index;
    //   //     console.log(inputs[index])  
    //   //     console.log(span)
    //   //     if (inputs[index].nextElementSibling.tagName !== 'SPAN')
    //   //     inputs[index].parentNode.insertBefore(span, inputs[index].nextElementSibling)
    //   // })(i);

    }
  


  /********************************Delete after adding************ */

  document.getElementById("question-input").value = "";
    $('input.templateAnsw').each(function(){
        $(this).val('');
    }); 
  document.getElementById("question-section").querySelectorAll(".templateAnsw").value = "";
  document.getElementById("question-section").querySelector("#addOther").innerHTML = "";
  document.getElementById("question-section").querySelector("#templateEmail").value = "";

/******************after add read only questions************ */

  var form = document.getElementById("addQstn");
var elements = form.elements;
for (var i = 0, len = elements.length; i < len; ++i) {
    elements[i].readOnly = true;
}

  /*****************************Add other variant***************** */

  $("#other").one("click", function () {
    var parent = document.querySelector("#addOther");
    var newLabel = document.createElement("label");
    var newInput = document.createElement("input");
    newLabel.className = "newLabelClass";
    newLabel.id = "otherid"
    newInput.className = "addOtherClass";
    newInput.id = "otherTextid"
    newInput.type = "text";
    newLabel.appendChild(document.createTextNode("Digər"));
    newLabel.appendChild(newInput);
    parent.appendChild(newLabel);
  });

}




function deleteBtn(element){
  //  $(element).closest('div').find('label').remove();
  // $(element).prevUntil("").remove()
var form = document.getElementById("form");
var dltbtn = document.getElementById("deleteForm");
var qstn = document.getElementById("deleteQstn");
var answ = document.getElementById("deleteAnsw");

  // var elementType = $(element).prevUntil(desc).prop('nodeName');
  // console.log(elementType)
console.log(form)



var btn= $(element).closest(":has(button)").find('button');
alert(btn);
var comparetext = 'Sil'
if(btn.html().trim() === comparetext){
  $( element ).prevUntil( btn).remove();
    $(element).remove()
  // alert("1")
}
else{
  $( element ).prevUntil( form).remove();
    dltbtn.remove();
}
  // if($(dltbtn).length){
  //   $( element ).prevUntil( dltbtn).remove();
  //   dltbtn.remove()
  // }
  // else{
  //   $( element ).prevUntil( form).remove();
  //   dltbtn.remove();
  // }
    
  // }

  
  // $(element).remove()

  
}
// $("#deleteForm").click(function () {
//   $(this).parent().remove(); 

// });


//******************************COUNTER********************** */

// var count = 0;
// var countButton = document.getElementById("countButton");
// var displayCount = document.getElementById("displayCount");
// countButton.onclick = function(){
//   count++;
//   displayCount.innerHTML = count;
// }