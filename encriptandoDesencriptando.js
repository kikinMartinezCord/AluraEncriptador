
function encriptar() {
    let txtIngresado = document.getElementById('txtArea1').value;
   let arreglitotxtIngresado = txtIngresado.split('');
   
   for (let i = 0; i <= arreglitotxtIngresado.length - 1; i++) 
   {
     
      if (arreglitotxtIngresado[i] === "a") {
         arreglitotxtIngresado[i] = "ai";
      }
      if (arreglitotxtIngresado[i] === "e") {
         arreglitotxtIngresado[i] = "enter";
      }
      if (arreglitotxtIngresado[i] === "i") {
         arreglitotxtIngresado[i] = "imes";
      }
      if (arreglitotxtIngresado[i] === "o") {
         arreglitotxtIngresado[i] = "ober";
      }
      if (arreglitotxtIngresado[i] === "u") {
         arreglitotxtIngresado[i] = "ufat";
      }
   }
   let textoEncriptado = arreglitotxtIngresado.join("");
   
   //let arreglitoEncriptado = textoEncriptado.split("");
  //return(arreglitoEncriptado);
  //alert(arreglitoEncriptado);
  document.getElementById("txtArea2").innerHTML=textoEncriptado;
  document.getElementById('btnDesencriptar').removeAttribute('disabled');
}


function desEncriptar()
{ 
    let txtADesencriptar = document.getElementById('txtArea2').value;
    let arreglitoEncriptado = txtADesencriptar.split('');
    document.getElementById('btnDesencriptar').setAttribute('disabled', 'true');
      

let textoNuevo=[];
   for (let j = 0; j <= arreglitoEncriptado.length - 1; j++) {
      console.log(`Iteración: ${j} letra: ${arreglitoEncriptado[j]}`)
            
      if (arreglitoEncriptado[j] === "a") {
                 
         arreglitoEncriptado.splice(j+1,1);
         textoNuevo[j]=arreglitoEncriptado[j];
        // alert(`Descencriptando ${textoNuevo}`);
      }
      else if(arreglitoEncriptado[j] === "e"){
         arreglitoEncriptado.splice(j+1,4);
         textoNuevo[j]=arreglitoEncriptado[j];
         //alert(`Descencriptando${textoNuevo}`);
         
      }
      else if(arreglitoEncriptado[j] === "i"){
         arreglitoEncriptado.splice(j+1,3);
         textoNuevo[j]=arreglitoEncriptado[j];
         //alert(`Descencriptando ${textoNuevo}`);
         
      }
      else if(arreglitoEncriptado[j] === "o"){
         arreglitoEncriptado.splice(j+1,3);
         textoNuevo[j]=arreglitoEncriptado[j];
         //alert(`Descencriptando ${textoNuevo}`);
         
      }
      else if(arreglitoEncriptado[j] === "u"){
         arreglitoEncriptado.splice(j+1,3);
         textoNuevo[j]=arreglitoEncriptado[j];
         //alert(`Descencriptando ${textoNuevo}`);
         
      }
      else{
         textoNuevo[j]=arreglitoEncriptado[j];
         
         //alert(`Descencriptando ${textoNuevo}`);
      }
         
         
      }
      textoNuevo= textoNuevo.join("");
      document.getElementById("txtArea2").innerHTML=textoNuevo;
      
      //alert(`El texto desencriptado es : ${textoNuevo}`)

    }   

