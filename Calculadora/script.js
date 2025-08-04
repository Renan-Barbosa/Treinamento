let display=document.getElementById('display');
let valor='';
let operacaoConcluida=false;

function adicionarValor(val){
    if(operacaoConcluida){
        valor='';
        operacaoConcluida=false;
    }
    valor += val;
    display.value=valor;
}

function calcular(){
    try{
        let resultado= eval(valor);
        display.value=resultado;
        valor=resultado.toString();
        operacaoConcluida=true;
    }catch(e){
        display.value='Erro';
        valor='';
    }
}

function limpar(){
    display.value='';
    valor='';
    operacaoConcluida=false;
}

function deletar(){
    valor=valor.slice(0, -1)
    display.value=valor
}