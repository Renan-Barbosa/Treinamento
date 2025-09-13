const cartao=document.querySelector('.cartao');
const cronometro=document.getElementById('cronometro');

cartao.addEventListener('mouseover', () =>{
  atualizarCronometro();
  setInterval(atualizarCronometro,1000);
})

function atualizarCronometro(){
  const dataCasamento= new Date('2025-10-18T00:00:00');
  const agora=new Date();
  const diferenca=dataCasamento.getTime()- agora.getTime();

  if(diferenca <0){
    cronometro.innerHTML='0 dias';
    return;
  }

  const dias= Math.floor(diferenca/(1000*60*60*24))
  const horas=Math.floor((diferenca%(1000*60*60*24))/(1000*60*60))
  const minutos=Math.floor((diferenca%(1000*60*60))/(1000*60));
  const segundos=Math.floor((diferenca%(1000*60))/1000);

  cronometro.innerHTML= `${dias} dias ${horas.toString().padStart(2,'0')}:${minutos.toString().padStart(2,'0')}:${segundos.toString().padStart(2,'0')}`;
}