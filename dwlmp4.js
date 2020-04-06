function encontrar() {

    let prePalavraChave = "https://vod-progressive.akamaized.net/";
    let posPalavraChave = ".mp4";
  
    let doc = document.body.outerHTML;
  
    let indexPre = doc.indexOf(prePalavraChave);
    let indexMeio = indexPre + doc.substring(indexPre).indexOf(posPalavraChave) + posPalavraChave.length;
    let indexPos = indexMeio + doc.substring(indexMeio).indexOf(posPalavraChave) + posPalavraChave.length;
  
    var link = [doc.substring(indexPre, indexPos)];
    //TESTE
    console.log("Tentando baixar!");

    console.log(indexPre);
    console.log(indexMeio);
    console.log(indexPos);


    let a = document.createElement("a");
    document.body.appendChild(a);
    a.href = link;
    a.style.display = "none";
    a.id = "MoodleVideoAula";
    console.log(a)
    //a.download = "MoodleVideoAula-"+Math.random()+".mp4";
    a.click();


}

encontrar();