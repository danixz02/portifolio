function toggleMenu() {
  const menu = document.querySelector('.menu-ul-menu-hamburguer');
  menu.classList.toggle('active');
}


  document.getElementById("download-btn").addEventListener("click", function() {
    // Criar um link temporário
    let link = document.createElement("a");
    link.href = "/files/CV-Daniel Friedrich de Moura.pdf";
    link.download = "Daniel Friedrich de Moura - CV.pdf"; // Nome do arquivo ao baixar
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


console.log(`
  %c👋 Olá, dev curioso! 
  %c
  Gostou do site? Vamos conversar!
  Entre em contato: danielfriedrichm@gmail.com
  
  `, 
  'font-size: 20px; font-weight: bold;',
  'font-size: 16px;');