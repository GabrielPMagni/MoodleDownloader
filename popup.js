function preparar() {
    chrome.tabs.executeScript({
      file: "imgcrawler.js"
    }); 
}

function apontar() {
  chrome.tabs.executeScript({
      file: "dwlmp4.js"
  });
}

function fogo() {
  chrome.tabs.executeScript({
      file: "salvar.js"
  });
}

document.getElementById('preparar').addEventListener('click', preparar);
document.getElementById('apontar').addEventListener('click', apontar);
document.getElementById('fogo').addEventListener('click', fogo);

