function clickOpenMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  console.log(mobileMenu);
  if (mobileMenu) {
    if (mobileMenu.classList.contains("active")) {
      mobileMenu.classList.remove("active");
    } else {
      mobileMenu.classList.add("active");
    }
  }
}
