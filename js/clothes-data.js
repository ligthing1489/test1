const products = [
  { id: "1", title: "Air Jordan 5 Retro", price: 180.90,
    img: "../products/shoes/shoe1/AIR+JORDAN+5+RETRO1.png",
    category: "Sneakers",
    gender: "Male" },
  { id: "2", title: "Air Jordan 1 Low \"Game Royal\"", price: 180.90,
    img: "../products/shoes/shoe2/RETRO-1.jpeg",
    category: "Sneakers",
    gender: "Male" },
  { id: "3", title: "LeBron XXII \"Tunnel Vision\"", price: 50.98,
    img: "../products/shoes/shoe3/LEBRON+XXII-1.jpeg",
    category: "Sneakers",
    gender: "Male" },
  { id: "4", title: "Forum Low Classic Shoes", price: 45.78,
    img: "../products/shoes/shoe4/ForumLow-1.jpeg",
    category: "Sneakers",
    gender: "Male" },
  { id: "5", title: "Softride Sway", price: 30.98,
    img: "../products/shoes/shoe6-female/puma-1.jpeg",
    category: "Sneakers",
    gender: "Female" },
  { id: "6", title: "CA Pro Chrome", price: 90.30,
    img: "../products/shoes/shoe7-female/puma2-1.jpeg",
    category: "Sneakers",
    gender: "Female" },
  { id: "7", title: "Jasen Block Heel Almond Toe Dress Booties", price: 60.90,
    img: "../products/shoes/shoe10-female/heels3-1.webp",
    category: "Heels",
    gender: "Female" },
  { id: "8", title: "Timberland X Culture Kings 6\" Premium Boot", price: 200.90,
    img: "../products/shoes/shoes5/tim-1.jpeg",
    category: "Sneakers",
    gender: "Male" },
  { id: "44", title: "Zitah Pointed Toe Pumps", price: 100.90,
    img: "../products/shoes/shoes8-female/heels-1.webp",
    category: "Heels",
    gender: "Female" },
  { id: "9", title: "Olivine High Heel in Red Muse", price: 70.90,
    img: "../products/shoes/shoes9-female/heels2-1.webp",
    category: "Heels",
    gender: "Female" },
  { id: "19", title: "Deconstructed skater trainers", price: 75.90,
    img: "../products/shoes/shoe11/shoe11-1.jpg",
    category: "Sneakers",
    gender: "Unisex" },

    //bottoms
  { id: "10", title: "Relaxed Ripstop Gusset Camo Cargo Pants", price: 45.98,
    img: "../products/bottoms/pants-shorts/longPants1/pants1-1.jpeg",
    category: "Pants",
    gender: "Male" },
  { id: "11", title: "Balloon Fit Rigid Contrast Stitch Ripped Jeans", price: 51.99,
    img: "../products/bottoms/pants-shorts/longPants2/pants2-1.jpeg",
    category: "Pants",
    gender: "Male" },
  { id: "12", title: "Raw Edge Applique Cross Baggy Jean", price: 30.95,
    img: "../products/bottoms/pants-shorts/longPants3/pants3-1.jpeg",
    category: "Pants",
    gender: "Male" },
  { id: "13", title: "Piping Split Hem Trouser", price: 28.99,
    img: "../products/bottoms/pants-shorts/longPants4/pants4-1.jpeg",
    category: "Pants",
    gender: "Male" },
  { id: "14", title: "Straight Leg Split Hem Knit Jogger", price: 64.98,
    img: "../products/bottoms/pants-shorts/longPants5/pants5-1.jpeg",
    category: "Pants",
    gender: "Male" },
  { id: "18", title: "Wide leg plush trousers", price: 48.92,
    img: "../products/bottoms/pants-shorts/longPants6/pants6-1.jpg",
    category: "Pants",
    gender: "Male" },
  { id: "15", title: "Bronson Cargo Short", price: 40.21,
    img: "../products/bottoms/pants-shorts/shorts1/jean-shorts1.jpeg",
    category: "Shorts",
    gender: "Male" },
  { id: "16", title: "Wyatt Denim Short", price: 45.96,
    img: "../products/bottoms/pants-shorts/shorts2/jeanShorts2-2.jpeg",
    category: "Shorts",
    gender: "Male" },

    //Classy Shirts
  { id: "17", title: "Oversized Boxy Line Drawing Knitted Polo", price: 54.89,
    img: "../products/shirts/classy-shirts/classy1/classyShirts1.jpeg",
    category: "Long-Sleeves",
    gender: "Male" },
  { id: "20", title: "Short Sleeve Revere Cable Knit Shirt", price: 69.96,
    img: "../products/shirts/classy-shirts/classy2/classyShirts2-1.jpeg",
    category: "Long-Sleeves",
    gender: "Male" },
  { id: "21", title: "Nylon Embroidered Shirt", price: 45.62,
    img: "../products/shirts/classy-shirts/classy3/classyShirts3-1.jpeg",
    category: "Long-Sleeves",
    gender: "Male" },
  { id: "22", title: "Waffle SS Shirt - Charcoal Ombre", price: 36.97,
    img: "../products/shirts/classy-shirts/classy4/classyShirts4-1.jpeg",
    category: "Long-Sleeves",
    gender: "Male" },
  { id: "23", title: "Open knit short sleeve shirt", price: 56.98,
    img: "../products/shirts/classy-shirts/classy5/classyShirts5-2.jpg",
    category: "Long-Sleeves",
    gender: "Male" },


    //graphic tee
  { id: "24", title: "D initial print relaxed fit short sleeve T-shirt", price: 30.95,
    img: "../products/shirts/graphic/tee1/graphic-shirt1.jpg",
    category: "Shirts",
    gender: "Male" },
  { id: "25", title: "Oversized Official Gravestone Graphic T-shirt", price: 46.87,
    img: "../products/shirts/graphic/tee2/graphicTee2-1.jpeg",
    category: "Shorts",
    gender: "Male" },
  { id: "26", title: "Oversized Boxy Heavyweight Waffle Varsity T-shirt", price: 23.58,
    img: "../products/shirts/graphic/tee3/graphicTee3-1.jpeg",
    category: "Shirts",
    gender: "Male" },
  { id: "27", title: "Printed short sleeve oversize T-shirt", price: 30.58,
    img: "../products/shirts/graphic/tee4/graphicTee4-1.jpg",
    category: "Shirts",
    gender: "Unisex" },
  { id: "28", title: "Oversized Skull Graffiti Large Scale Graphic T-shirt", price:  36.97,
    img: "../products/shirts/graphic/tee5/graphicTee5-1.jpeg",
    category: "Shirts",
    gender: "Male" },


    //long sleeve-dress-shirts
  { id: "29", title: "OSLO SHIRT - KHAKI STRIPE", price: 25.95,
    img: "../products/long sleeve/dress-shirts/dress1/dressShirt1.webp",
    category: "Long-Sleeves",
    gender: "Male" },
  { id: "30", title: "Broadcloth Shirt", price: 10.36,
    img: "../products/long sleeve/dress-shirts/dress2/dressshirt2-1.jpeg ",
    category: "Long-Sleeves",
    gender: "Male" },
  { id: "31", title: "Classic Fit Gingham Oxford Shirt", price: 38.98,
    img: "../products/long sleeve/dress-shirts/dress3/dressshirt3-1.jpg",
    category: "Long-Sleeves",
    gender: "Male" },
  { id: "32", title: "Flannel Shirt", price: 30.28,
    img: "../products/long sleeve/dress-shirts/dress4/dressshirt4-2.jpg",
    category: "Long-Sleeves",
    gender: "Unisex" },
  { id: "33", title: "Broadcloth Shirt ", price: 45.96,
    img: "../products/long sleeve/dress-shirts/dress5/dressshirt5-1.jpg",
    category: "Long-Sleeves",
    gender: "Male" },


    //long sleeves
  { id: "34", title: "Nike Club unisex crew sweatshirt in gray heather", price: 45.23,
    img: "../products/long sleeve/long1/nike-long1.jpeg",
    category: "Long-Sleeves",
    gender: "Unisex" },
  { id: "35", title: "Nike Standard Issue", price: 50.15,
    img: "../products/long sleeve/long2/sweat-1.jpeg",
    category: "Long-Sleeves",
    gender: "Male" },
  { id: "36", title: "Printed sweatshirt", price: 40.98,
    img: "../products/long sleeve/long3/sweat2-2.jpeg",
    category: "Long-Sleeves",
    gender: "Male" },
  { id: "37", title: "PEANUTS UT Sweatshirt", price:22.98,
    img: "../products/long sleeve/long4/sweat3-3.jpeg",
    category: "Long-Sleeves",
    gender: "Male" },
  { id: "38", title: "oversized sweatshirt with chest print in gray heather", price:  67.94,
    img: "../products/long sleeve/long5/sweat5-1.jpg",
    category: "Long-Sleeves",
    gender: "Male" },
  { id: "47", title: "Printed chenille sweater", price: 30.56,
    img: "../products/long sleeve/long6/sweat6-1.jpg",
    category: "Long-Sleeves",
    gender: "Male" },
  { id: "45", title: "Cable-knit crew neck sweater", price: 45.93,
    img: "../products/long sleeve/long7/longFemale7-1-1.jpg",
    category: "Long-Sleeves",
    gender: "Female" },

  //Jackets
  { id: "39", title: "Denim jacket with animal print faux fur collar", price: 83.97,
    img: "../products/jackets/jac1/jacketFemale1-1.jpg",
    category: "Jackets",
    gender: "Female" },
  { id: "40", title: "Hooded denim jacket", price: 60.98,
    img: "../products/jackets/jac2/jacketFemale2-1.jpg",
    category: "Jackets",
    gender: "Female" },
  { id: "41", title: "Dessuadora cremallera print", price: 50.35,
    img: "../products/jackets/jac3/jacket1-1.jpg",
    category: "Jackets",
    gender: "Male" },
  { id: "42", title: "Cernucci Cropped PU Puffer Bomber Jacket", price: 88.68,
    img: "../products/jackets/jac4/jacketFemale4-1.jpg",
    category: "Jackets",
    gender: "Female" },
  { id: "43", title: "Oversized Hooded Puffer Jacket", price: 130.95,
    img: "../products/jackets/jac5/jacket5-1.jpg",
    category: "Jackets",
    gender: "Male" },




];

function renderProducts(filteredProducts) {
  const productGrid = document.getElementById('product-grid');
  productGrid.innerHTML = ''; // Clear existing products
  filteredProducts.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product-item');
    productElement.innerHTML = `
  <a href="Product-Detail-Page.html?productId=${product.id}">
    <img src="${product.img}" alt="${product.title}" class="product-image" />
    <h4 class="product-name">${product.title}</h4>
    <p class="product-price">$${product.price}</p>
  </a>
    `;
    productGrid.appendChild(productElement);
  });
}

function filterProducts() {
  let filteredProducts = [...products];


  const selectedCategory = document.querySelector('input[name="category"]:checked')?.value;
  if (selectedCategory && selectedCategory !== 'all') {
    filteredProducts = filteredProducts.filter(product =>
      product.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  }


  const selectedPrice = document.querySelector('input[name="price"]:checked')?.value;
  if (selectedPrice && selectedPrice !== 'all') {
    filteredProducts = filteredProducts.filter(product => {
      switch (selectedPrice) {
        case '0-50':
          return product.price >= 0 && product.price <= 50;
        case '50-100':
          return product.price > 50 && product.price <= 100;
        case '100+':
          return product.price > 100;
        default:
          return true;
      }
    });
  }


  const selectedGender = document.querySelector('input[name="gender"]:checked')?.value;
  if (selectedGender && selectedGender !== 'all') {
    filteredProducts = filteredProducts.filter(product =>
      product.gender.toLowerCase() === selectedGender.toLowerCase()
    );
  }

  renderProducts(filteredProducts);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('input[name="category"], input[name="price"], input[name="gender"]').forEach(input => {
    input.addEventListener('change', filterProducts);
  });

  renderProducts(products);
});
