export default function CreateNavbar() {
  const content = document.querySelector('#content');
  const navbar = document.createElement('nav');
  navbar.classList.add('navbar');
  navbar.innerHTML = `
    <nav class="bg-rose-800 dark:bg-gray-800">
      <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
          <div class="flex items-center">
              <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                  <li>
                      <img class="h-6 w-auto" src="https://via.placeholder.com/100x25" alt="Tribu Dog logo">
                  </li>
                  <li>
                      <button class="text-gray-200 dark:text-white hover:underline underline" id="home">Home</button>
                  </li>
                  <li>
                      <button class="text-gray-200 dark:text-white hover:underline" id="menu">Menu</button>
                  </li>
                  <li>
                      <button class="text-gray-200 dark:text-white hover:underline" id="contact">Contact</button>
                  </li>
              </ul>
          </div>
      </div>
    </nav>
  `;
  content.appendChild(navbar);
}