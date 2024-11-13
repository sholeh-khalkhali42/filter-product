const searchInput = document.querySelector('#search');
const productsDom = document.querySelector('.products');

console.log('uytiuyiuyiuy',aram);
var aram=10;
const btns = document.querySelectorAll('.btn');
document.addEventListener('DOMContentLoaded', () => {
  console.log('loaded...');
});


const products = [{ id: 1, title: 'watch', class: 'watch', price: 200, image: "images/card9.jpg" },
{ id: 2, title: "mozon", class: 'notreal', price: 200, image: "images/card5.png" }, { id: 3, title: 'kabir', class: 'notreal', price: 200, image: "images/card1.png" }, { id: 1, title: 'watch', class: 'watch', price: 50, image: "images/card9.jpg" },
{ id: 2, title: "mozon", class: 'notreal', price: 200, image: "images/card5.png" }, { id: 3, title: 'kabir', class: 'notreal', price: 200, image: "images/card1.png" }, { id: 1, title: 'watch', class: 'watch', price: 250, image: "images/card9.jpg" },
{ id: 2, title: "mozon", class: 'notreal', price: 0, image: "images/card5.png" }, { id: 3, title: 'kabir', class: 'notreal', price: 200, image: "images/card1.png" }];
// console.log(items);
const filters = {
  searchItem: "",
};
function renderProduct(_products, _filter) {
  const filterproduct = _products.filter((p) => {

    return p.title.toLowerCase().includes(_filter.searchItem.toLowerCase());

  });

  console.log(filterproduct);

  productsDom.innerHTML = "";
  filterproduct.forEach((item) => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    productDiv.innerHTML = ` <div class="image-container">
       <img src="${item.image}" alt="">
       </div>
       <div class="product-desc">
           <div class="product-price">${item.price}تومان
           <p class=product-title>${item.title}</p>
           </div>
       </div>`
    productsDom.appendChild(productDiv);
  });



};



searchInput.addEventListener("input", (e) => {
  filters.searchItem = e.target.value;
  // console.log(filters.searchItem);
  renderProduct(products, filters);

});
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const filter = e.target.dataset.filter;
    filters.searchItem = filter;
    console.log(filter);
    renderProduct(products, filters);
  });
});


