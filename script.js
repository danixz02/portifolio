async function requestAudioPermission() {
  if (navigator.permissions) {
    try {
      const permission = await navigator.permissions.query({ name: "microphone" });
      console.log("Permissão de áudio:", permission.state);
    } catch (error) {
      console.warn("O navegador não suporta permissão explícita para áudio.");
    }
  }
}

async function toggleMenu() {
  const menu = document.querySelector('.menu-ul-menu-hamburguer');
  menu.classList.toggle('active');

  const sound = document.getElementById("menuSound");

  try {
    await requestAudioPermission(); // Solicita permissão antes de tocar o som

    if (sound.paused) {
      sound.currentTime = 0;
      await sound.play();
    } else {
      sound.pause();
      sound.currentTime = 0;
    }
  } catch (error) {
    console.error("Erro ao tocar o som:", error);
  }
}

// Solicita permissão ao carregar a página (opcional)
document.addEventListener("DOMContentLoaded", requestAudioPermission);
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

