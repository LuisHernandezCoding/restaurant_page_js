export default function CreateContactPage() {
  const content = document.querySelector('#content');
  const contactPage = document.createElement('div');
  contactPage.classList.add('contact-page');
  contactPage.innerHTML = `
  <div class="bg-slate-700 py-12">
    <div class="max-w-5xl mx-auto px-4 font-sans text-gray-800">
      <h1 class="text-2xl font-bold text-gray-200 text-center mb-6 mt-0">Contact Us</h1>
      <div class="md:flex md:justify-center mb-6">
        <div class="md:w-1/3 p-4">
          <div class="bg-white rounded-lg shadow-lg p-6">
            <img src="https://via.placeholder.com/100x100" alt="John Doe" class="h-32 w-32 rounded-full shadow-md">
            <div class="mt-4 text-xl font-bold">John Doe</div>
            <div class="text-gray-600 mb-2">Manager</div>
            <div class="text-gray-600 mb-2">(123) 456-7890</div>
            <div class="text-gray-600 mb-2">john.doe@restaurant.com</div>
          </div>
        </div>
        <div class="md:w-1/3 p-4">
          <div class="bg-white rounded-lg shadow-lg p-6">
            <img src="https://via.placeholder.com/100x100" alt="Jane Doe" class="h-32 w-32 rounded-full shadow-md">
            <div class="mt-4 text-xl font-bold">Jane Doe</div>
            <div class="text-gray-600 mb-2">Chef</div>
            <div class="text-gray-600 mb-2">(123) 456-7891</div>
            <div class="text-gray-600 mb-2">jane.doe@restaurant.com</div>
          </div>
        </div>
        <div class="md:w-1/3 p-4">
          <div class="bg-white rounded-lg shadow-lg p-6">
            <img src="https://via.placeholder.com/100x100" alt="John Doe" class="h-32 w-32 rounded-full shadow-md">
            <div class="mt-4 text-xl font-bold">Jim Doe</div>
            <div class="text-gray-600 mb-2">Server</div>
            <div class="text-gray-600 mb-2">(123) 456-7892</div>
            <div class="text-gray-600 mb-2">jim.doe@restaurant.com</div>
          </div>
        </div>
      </div>
      <div class="md:flex md:justify-center mb-6">
        <div class="md:w-1/3 p-4">
          <div class="bg-white rounded-lg shadow-lg p-6">
            <img src="https://via.placeholder.com/100x100" alt="Harry Doe" class="h-32 w-32 rounded-full shadow-md">
            <div class="mt-4 text-xl font-bold">Harry Doe</div>
            <div class="text-gray-600 mb-2">Bartender</div>
            <div class="text-gray-600 mb-2">(123) 456-7893</div>
            <div class="text-gray-600 mb-2">harry.doe@restaurant.com</div>
          </div>
        </div>
        <div class="md:w-1/3 p-4">
          <div class="bg-white rounded-lg shadow-lg p-6">
            <img src="https://via.placeholder.com/100x100" alt="Omari Doe" class="h-32 w-32 rounded-full shadow-md">
            <div class="mt-4 text-xl font-bold">Omari Doe</div>
            <div class="text-gray-600 mb-2">Host</div>
            <div class="text-gray-600 mb-2">(123) 456-7891</div>
            <div class="text-gray-600 mb-2">omari.doe@restaurant.com</div>
          </div>
        </div>
        <div class="md:w-1/3 p-4">
          <div class="bg-white rounded-lg shadow-lg p-6">
            <img src="https://via.placeholder.com/100x100" alt="Nery Doe" class="h-32 w-32 rounded-full shadow-md">
            <div class="mt-4 text-xl font-bold">Nery Doe</div>
            <div class="text-gray-600 mb-2">Busser</div>
            <div class="text-gray-600 mb-2">(123) 456-7892</div>
            <div class="text-gray-600 mb-2">nery.doe@restaurant.com</div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  content.appendChild(contactPage);
}
