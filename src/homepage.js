export default function CreateHomepage() {
  const content = document.querySelector('#content');
  const homepage = document.createElement('div');
  homepage.classList.add('homepage');
  homepage.innerHTML = `
    <div class="bg-slate-700 py-12">
      <h1 class="text-2xl font-bold text-gray-200 text-center mb-6 mt-0">Welcome to Tribu Dogs</h1>
      <div class="max-w-5xl mx-auto px-4 py-6 font-sans text-gray-800 bg-white rounded-lg shadow-lg">
        <div class="flex flex-col md:flex-row md:items-center mb-6">
          <div class="md:w-2/3 md:mr-6">
            <p class="text-xl font-medium mb-4">We specialize in gourmet hot dogs made with our own homemade bread and sausage. Come and try our unique and delicious flavors!</p>
            <p class="text-xl font-medium mb-4">We are located at 123 Main Street in the heart of downtown. We are open from 11am to 9pm every day.</p>
          </div>
          <div class="md:w-1/3">
            <img src="https://via.placeholder.com/400" alt="Sausage and bread" class="h-48 w-full object-cover rounded-lg shadow-md">
          </div>
        </div>
        <div class="text-xl font-medium mb-4">At our restaurant, we are committed to using only the freshest, natural ingredients with no additives or preservatives. Everything is made from scratch in-house, ensuring the highest quality and flavor for our customers.</div>

        <div class="max-w-5xl mx-auto px-4 font-sans text-gray-800">
          <div class="md:flex md:justify-center mb-6">
            <div class="md:w-1/2">
              <div class="text-2xl font-bold text-center mb-6">Our Story</div>
              <p class="text-xl font-medium mb-4 pr-4">We are a family-owned hot dog restaurant that has been serving delicious gourmet hot dogs for over 10 years. Our passion for using only the freshest, natural ingredients and creating unique flavor combinations has made us a beloved spot for hot dog lovers in the community.</p>
              <p class="text-xl font-medium mb-4 pr-4">Our menu features a variety of hot dogs made with our own homemade bread and sausage, as well as vegetarian options and sides such as chips, soda, and beer. We hope to see you at our restaurant soon!</p>
            </div>
            <div class="md:w-1/2">
              <div class="text-2xl font-bold text-center mb-6">Hours</div>
              <table class="w-full text-left">
                <thead>
                  <tr>
                    <th class="text-xl font-bold p-2 bg-gray-200">Day</th>
                    <th class="text-xl font-bold p-2 bg-gray-200">Hours</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-xl p-2 font-medium bg-gray-100">Monday</td>
                    <td class="text-xl p-2 font-medium bg-gray-100">10:00 AM - 8:00 PM</td>
                  </tr>
                  <tr>
                    <td class="text-xl p-2 font-medium bg-gray-200">Tuesday</td>
                    <td class="text-xl p-2 font-medium bg-gray-200">10:00 AM - 8:00 PM</td>
                  </tr>
                  <tr>
                    <td class="text-xl p-2 font-medium bg-gray-100">Wednesday</td>
                    <td class="text-xl p-2 font-medium bg-gray-100">10:00 AM - 8:00 PM</td>
                  </tr>
                  <tr>
                    <td class="text-xl p-2 font-medium bg-gray-200">Thursday</td>
                    <td class="text-xl p-2 font-medium bg-gray-200">10:00 AM - 8:00 PM</td>
                  </tr>
                  <tr>
                    <td class="text-xl p-2 font-medium bg-gray-100">Friday</td>
                    <td class="text-xl p-2 font-medium bg-gray-100">10:00 AM - 9:00 PM</td>
                  </tr>
                  <tr>
                    <td class="text-xl p-2 font-medium bg-gray-200">Saturday</td>
                    <td class="text-xl p-2 font-medium bg-gray-200">9:00 AM - 9:00 PM</td>
                  </tr>
                  <tr>
                    <td class="text-xl p-2 font-medium bg-gray-100">Sunday</td>
                    <td class="text-xl p-2 font-medium bg-gray-100">9:00 AM - 8:00 PM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  content.appendChild(homepage);
}
