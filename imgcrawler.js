var qtdiframe = document.getElementsByTagName('iframe').length;
console.log("QUANTIDADE DE IFRAMES ENCONTRADOS: " + qtdiframe)
for (var i = 0; i <= qtdiframe; i++) {
    var iframe = document.getElementsByTagName('iframe')[i]; 
    console.log("IFRAME ENCONTRADO: " + iframe)
    window.open(iframe.src, '_blank');

};

