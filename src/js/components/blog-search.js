document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("blogSearch");

  if (!searchInput) return;

  const cards = document.querySelectorAll(".blog-card");
  const emptyState = document.getElementById("searchEmpty");

  searchInput.addEventListener("input", (e) => {
    const search = e.target.value.toLowerCase().trim();

    let visibleCount = 0;

    cards.forEach((card) => {
      const title = card.dataset.title || "";
      const excerpt = card.dataset.excerpt || "";

      const match = title.includes(search) || excerpt.includes(search);

      if (match) {
        card.style.display = "";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

    if (visibleCount === 0) {
      emptyState.classList.remove("hidden");
    } else {
      emptyState.classList.add("hidden");
    }
  });
});
