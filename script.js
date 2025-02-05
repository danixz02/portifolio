function toggleMenu() {
  const menu = document.querySelector('.menu-ul-menu-hamburguer');
  const sound = document.getElementById("clickSound");

  menu.classList.toggle('active');
  
  // Toca o som e garante que reinicie ao clicar
  sound.currentTime = 0;
  sound.play();
}

  document.getElementById("download-btn").addEventListener("click", function() {
    // Criar um link temporário
    let link = document.createElement("a");
    link.href = "./files/Daniel Friedrich de Moura.pdf";
    link.download = "Daniel Friedrich - CV.pdf"; // Nome do arquivo ao baixar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});


document.getElementById("contact-btn").addEventListener("click", function() {
  let phone = "5527995892136"; 
  let message = "Olá! Acessei seu portfólio e estou interessado(a) em seu trabalho. Podemos conversar?";
  let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank"); // Abre em uma nova aba
});

