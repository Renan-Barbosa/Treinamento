function updateClock() {
  const timeElement = document.getElementById("time");
  const dateElement = document.getElementById("date");

  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const day = now.getDate();
  const month = now.getMonth() + 1; // Janeiro é 0, então somamos 1
  const year = now.getFullYear();

  // AM/PM format
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // 24h para 12h
  hours = hours % 12;
  hours = hours ? hours : 12; // O "0" será exibido como "12"

  // Formatando para dois dígitos
  const formattedHours = hours < 10 ? '0' + hours : hours;
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

  // Formatando a data
  const formattedDate = `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;

  // Exibindo a hora
  timeElement.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
  dateElement.textContent = formattedDate;
}

// Atualiza o relógio a cada segundo
setInterval(updateClock, 1000);

// Chama a função uma vez para inicializar
updateClock();