function calculaIMC(){
    let peso, altura, resp, texto, botao;
    altura = document.getElementById("edtAltura").value;
    peso = document.getElementById("edtPeso").value;

    resp = peso/(Math.pow(altura, 2));
    
    if(resp <= 18.5){
        texto = "Abaixo do peso";
    } else if(resp <= 24.9){
        texto = "Peso ideal (Parabéns!)";
    } else if(resp <= 29.9){
        texto = "Levemente Acima do Peso";
    } else if(resp <= 34.9){
        texto = "Obesidade Grau I";
    } else if(resp <= 39.9){
        texto = "Obesidade Grau II (Severa)";
    } else if(resp > 39.9){
        texto = "Obesidade Grau III (Mórbida)";
    } else
        texto = "Valores incorretos";

    exibicao = document.getElementById("mostraValor").innerText = "Seu Índice de Massa Corporal é " + resp.toFixed(2);
    document.getElementById("textoParagrafo").innerText = texto;
    document.getElementById("voltar").innerText = "Ver tabela";
}
