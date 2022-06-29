// filename: packages/slider/index.ts
import Slider from "./slider";
Slider.install = function (Vue: any) {
  Vue.component(Slider.name, Slider);
};
export default Slider;
