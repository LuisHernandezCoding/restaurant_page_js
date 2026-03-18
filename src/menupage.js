export default function CreateMenuPage() {
  const content = document.querySelector('#content');
  const menuPage = document.createElement('div');
  menuPage.classList.add('menu-page');
  menuPage.innerHTML = `
    <div class="bg-slate-700 py-12">
      <div class="max-w-5xl mx-auto px-4 font-sans text-gray-800">
        <h1 class="text-2xl font-bold text-gray-200 text-center mb-6 mt-0">Our Menu</h1>
        <div class="flex flex-wrap -mx-4">
          <div class="md:w-1/3 px-4 mb-8">
            <div class="bg-white rounded-lg shadow-lg p-6">
              <img src="https://via.placeholder.com/400x200" alt="Classic hot dog" class="h-40 w-full object-cover rounded-full shadow-md">
              <div class="mt-6">
                <div class="text-xl font-bold mb-2">Classic Hot Dog</div>
                <div class="text-gray-600 mb-4">Grilled sausage rolled in bacon and melted cheese, served on a toasted bun and filled with tomatoes and onions.</div>
                <div class="text-2xl font-bold text-orange-500">$6</div>
              </div>
            </div>
          </div>
          <div class="md:w-1/3 px-4 mb-8">
            <div class="bg-white rounded-lg shadow-lg p-6">
              <img src="https://via.placeholder.com/400x200" alt="Chili cheese dog" class="h-40 w-full object-cover rounded-full shadow-md">
              <div class="mt-6">
                <div class="text-xl font-bold mb-2">Chili Cheese Dog</div>
                <div class="text-gray-600 mb-4">Grilled sausage topped with chili and melted cheese, served on a toasted bun. Add onions and tomatoes for an extra charge.</div>
                <div class="text-2xl font-bold text-orange-500">$7</div>
              </div>
            </div>
          </div>
          <div class="md:w-1/3 px-4 mb-8">
            <div class="bg-white rounded-lg shadow-lg p-6">
              <img src="https://via.placeholder.com/400x200" alt="Bacon cheese dog" class="h-40 w-full object-cover rounded-full shadow-md">
              <div class="mt-6">
                <div class="text-xl font-bold mb-2">Veggie Dog</div>
                <div class="text-gray-600 mb-4">Grilled vegetarian sausage served on a toasted bun with all the toppings you desire like tomatoes or onions. (No bacon or cheese.)</div>
                <div class="text-2xl font-bold text-orange-500">$5</div>
              </div>
            </div>
          </div>
          <div class="md:w-1/3 px-4 mb-8">
            <div class="bg-white rounded-lg shadow-lg p-6">
              <img src="https://via.placeholder.com/400x200" alt="Lay's Doritos dog" class="h-40 w-full object-cover rounded-full shadow-md">
              <div class="mt-6">
                <div class="text-xl font-bold mb-2">Lay's Doritos Dog</div>
                <div class="text-gray-600 mb-4">Grilled sausage rolled in bacon topped with Lay's Doritos and chedar cheese, served on a toasted bun filled with tomatoes and onions.</div>
                <div class="text-2xl font-bold text-orange-500">$8</div>
              </div>
            </div>
          </div>
          <div class="md:w-1/3 px-4 mb-8">
            <div class="bg-white rounded-lg shadow-lg p-6">
              <img src="https://via.placeholder.com/400x200" alt="Jalapeno popper dog" class="h-40 w-full object-cover rounded-full shadow-md">
              <div class="mt-6">
                <div class="text-xl font-bold mb-2">Jalapeno Popper Dog</div>
                <div class="text-gray-600 mb-4">Grilled sausage topped with jalapenos, bacon, and melted cheese, served on a toasted bun filled with tomatoes and onions.</div>
                <div class="text-2xl font-bold text-orange-500">$8</div>
              </div>
            </div>
          </div>
          <div class="md:w-1/3 px-4 mb-8">
            <div class="bg-white rounded-lg shadow-lg p-6">
              <img src="https://via.placeholder.com/400x200" alt="Cubano dog" class="h-40 w-full object-cover rounded-full shadow-md">
              <div class="mt-6">
                <div class="text-xl font-bold mb-2">Cubano Dog</div>
                <div class="text-gray-600 mb-4">Grilled sausage topped with ham, pickles, and melted cheese, served on a toasted bun filled with tomatoes and onions.</div>
                <div class="text-2xl font-bold text-orange-500">$8</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  content.appendChild(menuPage);
}
