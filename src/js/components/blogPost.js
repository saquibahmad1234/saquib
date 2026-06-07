export default function initBlogPost() {
  const hero = document.querySelector(".blog-hero");
  const image = document.querySelector(".blog-hero-image");
  const overlay = document.querySelector(".blog-hero-overlay");

  if (!hero || !image || !overlay) return;

  function updateHero() {
    const rect = hero.getBoundingClientRect();

    const total = hero.offsetHeight - window.innerHeight;

    const progress = Math.min(Math.max(-rect.top / total, 0), 1);

    image.style.filter = `blur(${progress * 18}px)`;

    image.style.opacity = 1 - progress;

    overlay.style.background = `rgba(0,0,0,${progress * 0.75})`;
  }

  window.addEventListener("scroll", updateHero);

  updateHero();
}
