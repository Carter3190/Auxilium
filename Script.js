// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
  // Service data
  const services = [
    { name: 'Chiropractor', image: 'https://via.placeholder.com/200x150?text=Chiropractor' },
    { name: 'Oil Change', image: 'https://via.placeholder.com/200x150?text=Oil+Change' },
    { name: 'DJ', image: 'https://via.placeholder.com/200x150?text=DJ' },
    { name: 'Photography', image: 'https://via.placeholder.com/200x150?text=Photography' },
    { name: 'Pharmacy', image: 'https://via.placeholder.com/200x150?text=Pharmacy' }
  ];

  // Function to update the service carousel based on the search query
  function searchServices() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const carousel = document.getElementById('service-carousel');
    carousel.innerHTML = '';

    const filteredServices = services.filter(service => service.name.toLowerCase().includes(query));
    
    if (filteredServices.length === 0) {
      carousel.innerHTML = '<p>No services found.</p>';
      return;
    }

    filteredServices.forEach(service => {
      const serviceItem = document.createElement('div');
      serviceItem.classList.add('service-item');

      const img = document.createElement('img');
      img.src = service.image;
      img.alt = service.name;

      const p = document.createElement('p');
      p.textContent = service.name;

      serviceItem.appendChild(img);
      serviceItem.appendChild(p);
      carousel.appendChild(serviceItem);
    });
  }

  // Event listener for search button
  document.getElementById('search-button').addEventListener('click', searchServices);

  // Event listener for input field to enable real-time search
  document.getElementById('search-input').addEventListener('input', searchServices);

  // Initialize the carousel with all services on page load
  searchServices();
});

