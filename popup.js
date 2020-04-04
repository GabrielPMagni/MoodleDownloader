function main() {
    chrome.tabs.executeScript({
      file: "imgcrawler.js"
    }); 
}
document.getElementById('agir').addEventListener('click', main);
