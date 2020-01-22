let cifra = 10;
let puntos = 0;
let errores = 0;
let Switch = false;
let number = 1;
let Signo;
/********************************Delete********************************/
/*--------------------------------------------------------------------*/
let img = document.querySelector('.VentanaFlotante img');
img.onclick = function(event){
  document.querySelector('.VentanaFlotante').style.display='none';
  document.querySelector('.bglayer').style.display='none';
}

/*--------------------------------------------------------------------*/
/**************************VentanaFlotante*****************************/
/*--------------------------------------------------------------------*/
setTimeout(function(){
  document.querySelector('.VentanaFlotante').style.display='block';
  document.querySelector('.bglayer').style.display='block';
},1000);

/*--------------------------------------------------------------------*/
/*********************************Puntos*******************************/
/*--------------------------------------------------------------------*/
document.getElementById('Puntaje').innerHTML = puntos + " puntos";
function Punctuation(){
  puntos++;
  document.getElementById('Puntaje').innerHTML = puntos + " puntos";  
}
/*---------------------------------------------------------------------*/
/*********************************Errores*******************************/
/*--------------------------------------------------------------------*/
document.getElementById('Errores').innerHTML = errores + " errores";
function Errores(){
  errores++;
  document.getElementById('Errores').innerHTML = errores + " errores";
}
/*--------------------------------------------------------------------*/
/*********************************Audio********************************/
/*--------------------------------------------------------------------*/
function Sonido(Switch){
  if(Switch){
    document.getElementById('Audio').innerHTML = "<audio src='haha.ogg' autoplay></audio>"
  }else{
    document.getElementById('Audio').innerHTML = "<audio src='ohhhmm.ogg' autoplay></audio>"
  }
  
}
/*--------------------------------------------------------------------*/
/*********************************Cifras*******************************/
/*--------------------------------------------------------------------*/
document.getElementById('Uno').innerHTML = "<input class='Button'type='button'onclick='DigitNumber(1)' value='1'>";

document.getElementById('Dos').innerHTML = "<input class='Button'type='button'onclick='DigitNumber(2)' value='2'>";

document.getElementById('Tres').innerHTML = "<input class='Button'type='button'onclick='DigitNumber(3)' value='3'>";
/*--------------------------------------------------------------------*/
function DigitNumber(number){
  if(number == 1){
    cifra = 10;
    Refresh();
  }else{
    if(number == 2){
      cifra = 100;
      Refresh();
    }else{
      if(number == 3){
        cifra = 1000;
        Refresh();
      }
    }
  }
  console.log(cifra + " digito");
  return cifra;
}
/*--------------------------------------------------------------------*/
/*******************************Refresh********************************/
/*--------------------------------------------------------------------*/

function Refresh(){
  if(Signo == "+"){
    resultado = SumaDefault();
  }else{
    if(Signo == "-"){
      result2 = Resta();
    }else{
      if(Signo == "x"){
        result3 = Multiplicacion();
      }else{
        if(Signo == "÷"){
          result4 = Division();
        }
      }
    }
  }
}
/*--------------------------------------------------------------------*/
/*******************************Random*********************************/
/*--------------------------------------------------------------------*/
function RandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

/*--------------------------------------------------------------------*/

document.getElementById('ButtonSuma').innerHTML = "<input class='ButtonStyle'type='button'onclick='Operation1()' value='+'>";
function Operation1(){ 
  resultado = SumaDefault();
}

/*--------------------------------------------------------------------*/
/*********************************Resta********************************/
/*--------------------------------------------------------------------*/
document.getElementById('ButtonResta').innerHTML = "<input class='ButtonStyle' type='button'onclick='result2 = Resta()' value='-'>";
/*--------------------------------------------------------------------*/
function Resta(){
  
  let A = RandomInt(cifra);
  let B = RandomInt(cifra);
  Signo = "-";
  document.getElementById('Mostar').innerHTML = A +"-"+ B +"="+
    "<input type='text' id='Insert' autofocus "+
    "onkeyup='return verificar2(event)'></input>";
  /*console.log("resultado de la resta");
  console.log(A-B);*/
  return (A-B);
}

let result2 = Resta();
  
var verificar2 = function(e){
  if(e.keyCode == 13){ 
    if(result2 == document.getElementById('Insert').value){
      Punctuation();
      Sonido(true);
      result2 = Resta();
      document.getElementById('Insert').focus();    
    }else{
      Errores();
      Sonido(false);
      document.getElementById('Insert').style.background = '#ff7373';
      document.getElementById('Insert').style.color = 'azure';
          
    }
  } 
}
/*--------------------------------------------------------------------*/
/***************************Multiplicacion*****************************/
/*--------------------------------------------------------------------*/
document.getElementById('ButtonMultiplicacion').innerHTML = "<input class='ButtonStyle' type='button'onclick='result3 = Multiplicacion()' value='x'>";
/*--------------------------------------------------------------------*/
function Multiplicacion(){

  let A = RandomInt(cifra);
  let B = RandomInt(cifra);
  Signo = "x"; 
  document.getElementById('Mostar').innerHTML = A +"x"+ B +"="+
    "<input type='text' id='Insert' autofocus "+
    "onkeypress='return verificar3(event)'></input>";
  /*console.log("resultado de la Multiplicacion");*
  return (A*B);*/
}

let result3 = Multiplicacion();

function verificar3(e){
  if(e.keyCode == 13){
    if(result3 == document.getElementById('Insert').value){ 
      Punctuation();
      Sonido(true);
      result3 = Multiplicacion();
      document.getElementById('Insert').focus();
    }else{
      Errores();
      Sonido(false);
      document.getElementById('Insert').style.background = '#ff7373';
      document.getElementById('Insert').style.color = 'azure';
    }
  }
}  
/*--------------------------------------------------------------------*/
/*******************************Division*******************************/
/*--------------------------------------------------------------------*/ 
document.getElementById('ButtonDivision').innerHTML = "<input class='ButtonStyle' type='button' onclick='result4 = Division()' value='÷'>";
/*--------------------------------------------------------------------*/ 
function Division(){
  let CasoEspecial= 1;
  if(cifra == 10){
    CasoEspecial = 100;
  }else{
    if(cifra == 100){
      CasoEspecial = 1000;
    }else{
      if(cifra == 1000){
        CasoEspecial = 10000;
      }
    }
  }
  let A = RandomInt(CasoEspecial);
  let B = RandomInt(cifra);
  Signo = "÷"; 
  if(B==0){
    B= B + 1;
  }
  document.getElementById('Mostar').innerHTML = A +"÷"+ B +"="+
    "<input type='text' id='Insert' autofocus "+
    "onkeypress='return verificar4(event)'></input>";
  //console.log("resultado de la Division");
  //console.log((A/B).toFixed(1));
  let C = (A/B).toFixed(1);
  //let C = A / B; 
  //C = Math.round(C);
  //console.log(C);
  return C;
}

let result4 = Division();
function verificar4(e){
  console.log("comparando");
  console.log(result4);
  console.log(document.getElementById('Insert').value);
  let resultUser = document.getElementById('Insert').value;
  resultUser = resultUser * 1.0;
  if(e.keyCode == 13){
    if(result4 == resultUser){ 
      Punctuation();
      Sonido(true);
      result4 = Division();
      document.getElementById('Insert').focus();
    }else{
      Errores();
      Sonido(false);
      document.getElementById('Insert').style.background = '#ff7373';
      document.getElementById('Insert').style.color = 'azure';
    }
  }
}
/*--------------------------------------------------------------------*/
/*********************************SUMA*********************************/
/*--------------------------------------------------------------------*/
function SumaDefault(){

  let A = RandomInt(cifra);
  let B = RandomInt(cifra);
  Signo = "+"; 
  document.getElementById('Mostar').innerHTML = A +"+"+ B +"="+
    "<input type='text' id='Insert' autofocus "+
    "onkeypress='return verificarDefault(event)'></input>";  
  /*console.log("resultado de la suma1");
  console.log(A+B);*/
  return (A+B);
  
}

let resultado = SumaDefault();


function verificarDefault(e){
  if(e.keyCode == 13){
    if(resultado == document.getElementById('Insert').value){ 
      Punctuation();
      Sonido(true);
      resultado = SumaDefault()
      document.getElementById('Insert').focus()
    }else{
      Errores();
      Sonido(false);
      document.getElementById('Insert').style.background = '#ff7373';
      document.getElementById('Insert').style.color = 'azure';
    }
  }
}
/*--------------------------------------------------------------------*/ 
