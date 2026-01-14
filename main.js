// One Habbo - Main Script
// Developed by RZSISTEMA

console.log(
  "%c ONE HABBO %c Developed by RZSISTEMA ",
  "background: #2e66ff; color: white; padding: 5px; border-radius: 3px 0 0 3px; font-weight: bold;",
  "background: #0f172a; color: #fff; padding: 5px; border-radius: 0 3px 3px 0;"
);

document.addEventListener("DOMContentLoaded", () => {
  // Interactive Buttons
  const loginBtn = document.querySelector(".btn-login");
  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      alert("Sistema de login em breve! - Equipe RZSISTEMA");
    });
  }

  // Smooth Scroll for Anchors
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Glassmorphism Tilt Effect (Optional enhancement)
  const cards = document.querySelectorAll(".glass-card");
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--y", `${y}px`);
    });
  });
});
