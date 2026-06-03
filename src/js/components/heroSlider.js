const baseUrl = document.body.dataset.baseurl || "";

export default function heroSlider() {
  return {
    activeSlide: 0,
    previousSlide: 0,

    // NEW
    contentVisible: true,

    slides: [
      {
        title: "I WRITE<br>BLOGS",
        description:
          "Here I share my thoughts and things I deeply feel about. This is like an open diary to me where I talk about the life around me.",
        image: `${baseUrl}/assets/images/character-blogs.png`,
        glowX: "59%",
      },

      {
        title: "I LOVE<br>BOOKS",
        description:
          "Here I write about the books I read, the parts I love so much, parts which made me feel home. You know reading books is like living multiple lives.",
        image: `${baseUrl}/assets/images/character-books.png`,
        glowX: "62%",
      },

      {
        title: "FINANCE<br>& TAXES",
        description:
          "Here I share about tax and finances. My only goal here is to help people manage their wealth properly so they achieve their dreams without being reckless.",
        image: `${baseUrl}/assets/images/character-consult.png`,
        glowX: "65%",
      },
    ],

    init() {
      this.startSlider();
    },

    startSlider() {
      setInterval(() => {
        // Fade out
        this.contentVisible = false;

        setTimeout(() => {
          this.previousSlide = this.activeSlide;

          this.activeSlide = (this.activeSlide + 1) % this.slides.length;

          // Fade back in
          this.contentVisible = true;
        }, 250);
      }, 4500);
    },
  };
}
