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
    count=0;
    alert("Sorry, there isn't passenger available");
    return;
  }
  document.getElementById("count-el").innerText = count;
}
