import "../../pages/index.scss";
import "../fonts/fonts.scss";

const navLink = document.querySelectorAll(".menu__list-link");
const setLang = document.querySelectorAll(".main__head-lang");

function setActiveLink(items, elem, item) {
  items.forEach((element) => {
    if (element.classList.contains(elem)) {
      element.classList.remove(elem);
    }
    return;
  });
}

navLink.forEach((item) => {
  item.addEventListener("click", (evt) => {
    if (item.classList.contains("menu__list-link_active")) {
      item.classList.remove("menu__list-link_active");
      return;
    }
    setActiveLink(navLink, "menu__list-link_active", evt.target);
    item.classList.add("menu__list-link_active");
  });
});

setLang.forEach((item) => {
  item.addEventListener("click", (evt) => {
    if (item.classList.contains("main__head-lang_active")) {
      return;
    }
    setActiveLink(setLang, "main__head-lang_active", evt.target);
    item.classList.add("main__head-lang_active");
  });
});
