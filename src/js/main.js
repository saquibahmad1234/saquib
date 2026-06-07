import Alpine from "alpinejs";
import heroSlider from "./components/heroSlider.js";
import "./components/blog-search";

import initBlogPost from "./components/blogPost.js";

window.Alpine = Alpine;

Alpine.data("heroSlider", heroSlider);

Alpine.start();

document.addEventListener("DOMContentLoaded", () => {
  initBlogPost();
});
