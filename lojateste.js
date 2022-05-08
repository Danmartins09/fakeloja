axios({
  method: "get",
  url: "https://fakestoreapi.com/products",
}).then(function (response) {
  const data = response.data;
  console.log(data);

  const ratedproduct = data.slice();

  ratedproduct.sort((a, b) => {
    if (a.rating.rate > b.rating.rate) return -1;
    if (a.rating.rate < b.rating.rate) return 1;
    return 0;
  });
  console.log(ratedproduct);

  const ratedItens = document.querySelector(".ratedItens");

  for (let i = 0; i < 6; i++) {
    const item = `
      <div class="item">
        <img src="${ratedproduct[i].image}" alt="" >
        <span class="productTitle">${ratedproduct[i].title}</span>
        <span class="productPrice">${ratedproduct[i].price}</span>

      </div>`;
    ratedItens.innerHTML += item;
  }

  const products = document.querySelector(".productsSlider");
  for (i = 0; i < data.length; i++) {
    const productCard = `
      <div class="item">
        <img src="${data[i].image}" alt="" >
        <span class="productTitle">${data[i].title}</span>
        <span class="productPrice">${data[i].price}</span>
  
    </div>
      `;
    products.innerHTML += productCard;
  }
});

// ----- SWIPER -----

const banners = new Swiper(".banners", {
  loop: true,

  pagination: {
    el: ".banners-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    clickable: true,
  },
});

// const products = new Swiper(".products", {
//   a11y: {
//     enabled: false,
//   },
//   slidesPerView: 4,
//   spaceBetween: 99,
  
//   loop: true,
//   pagination: {
//     el: ".products-pagination",
//   },
//   navigation: {
//     nextEl: ".products-button-next",
//     prevEl: ".products-button-prev",
//     clickable: true,
//   },
// });
