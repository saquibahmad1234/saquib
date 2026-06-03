import Alpine from "alpinejs";
import heroSlider from "./components/heroSlider.js";

window.Alpine = Alpine;

Alpine.data("heroSlider", heroSlider);

Alpine.start();
