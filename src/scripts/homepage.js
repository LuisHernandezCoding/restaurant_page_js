// DOM Manipulation for the home page
export default function homepage() {
  const content = document.querySelector('#content');
  const home = document.createElement('div');
  home.classList.add('home');
  home.innerHTML = `
    <div class="home__content">
      <h1 class="home__title">Welcome to the best restaurant in town!</h1>
      <p class="home__text">We are a family owned restaurant that has been serving the best food in town for the past 30 years. We have a wide variety of dishes to choose from, from appetizers to desserts. Come and visit us today!</p>
    </div>
  `;
  content.appendChild(home);
}
