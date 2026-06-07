const bookSearch = document.getElementById("bookSearch");

if (bookSearch) {
  bookSearch.addEventListener("input", function () {
    const value = this.value.toLowerCase();

    document.querySelectorAll(".book-item").forEach((book) => {
      const title = book.dataset.title || "";
      const author = book.dataset.author || "";
      const note = book.dataset.note || "";

      const match =
        title.includes(value) || author.includes(value) || note.includes(value);

      book.style.display = match ? "" : "none";
    });
  });
}
