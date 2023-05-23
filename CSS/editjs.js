
const toggleNavbar = document.querySelector(".nav-logo");
const menuWrapper = document.querySelector(".navbar-wrapper");
const listWrapper = document.querySelector(".list-nav");

toggleNavbar.addEventListener('click', function() {
  menuWrapper.classList.toggle('active');
  listWrapper.classList.toggle('active');
});

const scrollLeftButton = document.querySelector('.left-btn');
const scrollRightButton = document.querySelector('.right-btn ');
const scrollAmount = 500;
const gallery = document.querySelector('.product-gallery');
let startX;
let scrollLeft;

gallery.addEventListener('mousedown', (e) => {
  startX = e.pageX - gallery.offsetLeft;
  scrollLeft = gallery.scrollLeft;
  gallery.style.scrollBehavior = 'unset';
});

gallery.addEventListener('mouseleave', () => {
  gallery.style.scrollBehavior = 'smooth';
});

gallery.addEventListener('mouseup', () => {
  gallery.style.scrollBehavior = 'smooth';
});

gallery.addEventListener('mousemove', (e) => {
  if (!startX) return;
  e.preventDefault();
  const x = e.pageX - gallery.offsetLeft;
  const walk = (x - startX) * 2;
  gallery.scrollLeft = scrollLeft - walk;
});



scrollLeftButton.addEventListener('click', () => {
  gallery.scrollBy(-scrollAmount, 0);
});

scrollRightButton.addEventListener('click', () => {
  gallery.scrollBy(scrollAmount, 0);
});




const express = require('express');
const app = express();

  fetch('http://127.0.0.1:5500//api/products')
    .then(response => response.json())
    .then(data => {
      // Manipulasi data dan tampilkan di halaman HTML
      const productGallery = document.querySelector('.product-gallery');

      data.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'photo-product';

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = '';

        const detailDiv = document.createElement('div');
        detailDiv.className = 'detail-product';

        const priceTag = document.createElement('div');
        priceTag.className = 'price-tag';
        priceTag.innerHTML = `<p>${product.price}</p>`;

        const titleProduct = document.createElement('h2');
        titleProduct.className = 'title-product';
        titleProduct.textContent = product.description;

        detailDiv.appendChild(priceTag);
        detailDiv.appendChild(titleProduct);

        productDiv.appendChild(img);
        productDiv.appendChild(detailDiv);

        productGallery.appendChild(productDiv);
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });



    
