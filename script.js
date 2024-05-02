// chama os botões para constantes e declara variaveis globais
const btnCalc=document.getElementById("btnCalc")
const btnLimp=document.getElementById("btnLimp")
const divResultado=document.getElementById("resultado")
let n1, n2, n3

// Atribui evento aos botões
btnCalc.addEventListener("click", Calcular)
btnLimp.addEventListener("click", Limpar)

//funcões
function Calcular(){
    n1=parseFloat(frm.n1.value.replace(",","."))
    n2=parseFloat(frm.n2.value.replace(",","."))
    n3=parseFloat(frm.n3.value.replace(",","."))
    let mediaGeometrica= Math.pow(n1*n2*n3, 1/3).toFixed(2)
    divResultado.innerHTML=`Média Geométrica = ${mediaGeometrica}`
    if (divResultado.innerHTML != ""){
        divResultado.classList.add("valido")
    }
}

function Limpar(){
    divResultado.innerHTML=""
    divResultado.classList.remove("valido")
}
