var myVar = setInterval(function() {
  myTimer();
}, 60000);
const zeroPad = (num, places) => String(num).padStart(places, '0')
function myTimer() {
  var d = new Date();
  document.getElementById("clock").innerHTML = `<span class="date">${zeroPad(d.getDate(),2)}/${zeroPad(d.getMonth()+1,2)}/${d.getFullYear()}</span><span class="hour">${zeroPad(d.getHours(),2)}:${zeroPad(d.getMinutes(),2)}</span>`;
}
