import "./ui/style.css";
import { mountTitle } from "./ui/intro";
import { mountLoading } from "./ui/loading";
import { mount } from "./render/viewer";

const root = document.querySelector("#app");
if (!(root instanceof HTMLElement)) {
  throw new Error("Missing #app");
}

mountTitle(root, () => {
  const gate = mountLoading(root, () => {
    document.querySelector("#hud")?.classList.remove("is-concealed");
    document.querySelector("#labels")?.classList.remove("is-concealed");
  });
  mount(root, gate);
});
