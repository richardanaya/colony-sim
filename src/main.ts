import "./style.css";
import { mount } from "./viewer";

const root = document.querySelector("#app");
if (!(root instanceof HTMLElement)) {
  throw new Error("Missing #app");
}
mount(root);
