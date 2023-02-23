let incButton = document.getElementById("incButton");

let count = 0;
function incCount() {
  count++;
  document.getElementById("count-el").innerText = count;
  //   alert("Passenger added")
}

function decCount() {
  count--;
  if (count < 0) {
    count = 0;
    playWarn();
    alert("Sorry, there isn't passenger available");
    return;
  }
  document.getElementById("count-el").innerText = count;
}

function playAdd() {
  var audio = document.getElementById("addAudio");
  audio.play();
}

function playRemove() {
  var audio = document.getElementById("removeAudio");
  audio.play();
}

function playWarn() {
  var audio = document.getElementById("warnAudio");
  audio.play();
}
