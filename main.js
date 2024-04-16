// Ambil elemen dengan ID C
const figma = document.getElementById("figma");

// Tambahkan event listener untuk saat mouse masuk ke elemen .square
document.querySelectorAll(".square").forEach((square) => {
  square.addEventListener("mouseover", () => {
    // Saat mouse masuk, ubah rotasi elemen C menjadi 0
    figma.style.transform = "rotate(0deg)";
    figma.style.scale = "1";
    figma.style.transition = " 0.5s";
    figma.style.boxShadow = "none";
  });

  square.addEventListener("mouseout", () => {
    // Saat mouse keluar, kembalikan rotasi elemen C menjadi miring
    figma.style.transform = "rotate(15deg )"; // Sesuaikan sudut rotasi
    figma.style.boxShadow = "0px 0px 20px 0px rgba(0, 157, 255, 0.7)";
    figma.style.scale = "1.2";
  });
});
