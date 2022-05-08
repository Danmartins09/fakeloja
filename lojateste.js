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

const products = new Swiper(".products", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 18, 
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    clickable: true,
  },
});

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
  const products = document.querySelector(".productsSlider");
  
  for (i = 0; i < data.length; i++) {
    const productCard = `
      <div class="item swiper-slide">
        <img src="${data[i].image}" alt="" >
        <span class="productTitle">${data[i].title}</span>
        <span class="productPrice">${data[i].price}</span>
  
    </div>
      `;
    products.innerHTML += productCard;
  }

  for (let i = 0; i < 6; i++) {
    const item = `
      <div class="item swiper-slide">
        <img src="${ratedproduct[i].image}" alt="" >
        <span class="productTitle">${ratedproduct[i].title}</span>
        <span class="productPrice">${ratedproduct[i].price}</span>

      </div>`;
    ratedItens.innerHTML += item;
  }

  const mensCloth = document.querySelector('.mensCloth');
  const womensCloth = document.querySelector('.womensCloth');
  const jewelery = document.querySelector('.jewelery');
  const eletronics = document.querySelector('.eletronics');
  mensCloth.addEventListener('click', () =>{
    if(data[i].category == "men's cloth"){
      const arrayCategory = [];
      arrayCategory.push = data[i];
    }
  })
});

