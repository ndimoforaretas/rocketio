const moonIcon = document.getElementById("moon-icon");
const sunIcon = document.getElementById("sun-icon");
const body = document.documentElement;

// Theme variables
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Icon toggle
const toggleIcon = () => {
  moonIcon.classList.toggle("display-none");
  sunIcon.classList.toggle("display-none");
};

// Initial theme check
const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    body.classList.add("dark");
    moonIcon.classList.add("display-none");
    return;
  }
  sunIcon.classList.add("icon-transition");
  sunIcon.classList.add("display-none");
};

// Manual theme toggle
const toggleTheme = () => {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    localStorage.setItem("theme", "light");
    toggleIcon();
    return;
  }
  body.classList.add("dark");
  localStorage.setItem("theme", "dark");
  toggleIcon();
};

// Event listeners
moonIcon.addEventListener("click", () => {
  toggleTheme();
});
sunIcon.addEventListener("click", () => {
  toggleTheme();
});

// Initial theme check
themeCheck();

const initApp = () => {
  const harmburgerBtn = document.getElementById("harmburger-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
  };

  harmburgerBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
};

document.addEventListener("DOMContentLoaded", initApp);

// Rgister the service worker

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/service_worker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });
}
