function Calcular(){
    //variável global
    let numero1 = Number(document.getElementById('numero1').value);
    let numero2 = Number(document.getElementById('numero2').value);
    let numero3 = Number(document.getElementById('numero3').value);
    let resultado = (numero1 + numero2) * numero3;
    document.getElementById("resultado").innerHTML = 'A soma do 1° + o 2° multiplicado pelo 3° é: ' + resultado
}