function novaaba() {
    chrome.tabs.executeScript({
      file: "imgcrawler.js"
    }); 
}

function baixar() {
  chrome.tabs.executeScript({
      file: "dwlmp4.js"
  });
}
document.getElementById('agir1').addEventListener('click', novaaba);
document.getElementById('agir2').addEventListener('click', baixar);
