function btnGravar() {
    let txt = document.getElementById("input_texto").value;
    document.getElementById("exibirTexto").innerText = txt;
    let limparInput=document.getElementById("input_texto").value="";
    limparInput.innerText="";
  
console.log(txt);

}
  function btnColors(color) {
    document.getElementById("exibirTexto").style.color = color;   
  }
  
  function btnAumentarFonte() {
    let fonte = document.getElementById("exibirTexto");
    let estilo = window.getComputedStyle(fonte, null).getPropertyValue('font-size');
    let tamanho = parseFloat(estilo);
    fonte.style.fontSize = (tamanho + 2) + 'px';
  }
  
  function btnDiminuirFonte() {
    let fonte = document.getElementById("exibirTexto");
    let estilo = window.getComputedStyle(fonte, null).getPropertyValue('font-size');
    let tamanho = parseFloat(estilo);
    fonte.style.fontSize = (tamanho - 2) + 'px';
  }
  
  function btnLimpar(){
    let limparTexto=document.getElementById("exibirTexto");
    limparTexto.innerText="" ;
   
  }

  

    
  function btnMover() {
    let mover = document.getElementById("exibirTexto");
    mover.classList.toggle("girar");
}
  