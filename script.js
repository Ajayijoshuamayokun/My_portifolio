const sideMenu = document.querySelector("#sideMenu");
const navBar = document.querySelector("nav"); //select the navbar
const navLinks = document.querySelector("nav ul"); //select the nav links
function openMenu() {
  sideMenu.style.transform = "translateX(-16rem)";
}
function closeMenu() {
  sideMenu.style.transform = "translateX(16rem)";
}

//To add slight background color behind the navbar and the scroll window
window.addEventListener("scroll", () => {
  if (scrollY > 50) {
    navBar.classList.add(
      "bg-white",
      "bg-opacity-50",
      "backdrop-blur-lg",
      "shadow-sm",
      "dark:bg-darkTheme",
      "dark:shadow-white/20"
    );
    navLinks.classList.remove(
      "bg-white",
      "shadow-sm",
      "bg-opacity-50",
      "dark:border",
      "dark:border-white/50",
      "dark:bg-transparent"
    );
  } else {
    navBar.classList.remove(
      "bg-white",
      "bg-opacity-50",
      "backdrop-blur-lg",
      "shadow-sm",
      "dark:bg-darkTheme",
      "dark:shadow-white/20"
    );
    navLinks.classList.add(
      "bg-white",
      "shadow-sm",
      "bg-opacity-50",
      "dark:border",
      "dark:border-white/50",
      "dark:bg-transparent"
    );
  }
});

// ------------------------light mode and dark mode -----------------------------

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

function toggleTheme() {
  document.documentElement.classList.toggle("dark");
  if (document.documentElement.classList.contains("dark")) {
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }
}

// ------------------------------------Show more button toggle hide-------------------------------------
// document
//   .getElementById("showMoreButton")
//   .addEventListener("click", function () {
//     // Get all hidden items
//     const hiddenItems = document.querySelectorAll(".hidden");

//     // Toggle the visibility of hidden items
//     hiddenItems.forEach((item) => {
//       item.classList.toggle("hidden");
//     });

//     // Change the button text after showing or hiding items
//     if (hiddenItems[0].classList.contains("hidden")) {
//       this.textContent = "Show more";
//     } else {
//       this.textContent = "Show less";
//     }
//   });
