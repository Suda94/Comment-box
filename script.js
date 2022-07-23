let textArea = document.getElementById("comment");
let characterCounter = document.getElementById("charCount");
let warning = document.getElementById("warning");
const x = 140;

function myFunction() {
  let name = document.getElementById("name").value;
  let comment = document.getElementById("comment").value;
  let email = document.getElementById("email").value;

  let regexEmail = /^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/;

  // Checks Email
  if (name && comment && email.match(regexEmail)) {
    document.getElementById("comment1").innerHTML = comment;
    document.getElementById("meta_author").innerHTML = name;
  } else {
    return alertBox();
  }
}

const countCharacters = () => {
  let numOfEnteredChars = textArea.value.length;
  let counter = x - numOfEnteredChars;
  characterCounter.textContent = counter + "/140";
};

textArea.addEventListener("input", countCharacters);

const submit = document.getElementById("submit");
submit.addEventListener("click", myFunction);

// submit returns:

const input = document.getElementById("submit");
const name2 = document.getElementById("name");
const email = document.getElementById("email");

//promote the user to complete the form before when clicking submit.
function alertBox() {
  alert("Please Complete Form");
}
