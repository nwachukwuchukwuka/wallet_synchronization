const nav = document.querySelector(".nav"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");



  const displayLogo = document.querySelector('.logo_go');
  const displayLogout = document.querySelector('.logo_out');
  const background = document.querySelector('.background');





// searchIcon.addEventListener("click", () => {
//   nav.classList.toggle("openSearch");
//   nav.classList.remove("openNav");
//   if (nav.classList.contains("openSearch")) {
//     return searchIcon.classList.replace("uil-search", "uil-times");
//   }
//   searchIcon.classList.replace("uil-times", "uil-search");
// });

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
  displayLogo.style.display = 'none';
  displayLogout.style.display = 'none';
  background.style.background = 'white';
  background.style.height = '100vh';


});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
  displayLogo.style.display = 'block';
  displayLogout.style.display = 'block';
  background.style.background = 'white';
  background.style.height = '0';

});