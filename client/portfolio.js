// Invoking strict mode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode
'use strict';

// current products on the page
let currentProducts = [];

let currentPagination = {};
let currentSort = "";
let RecentProducts = [];

// initiate selectors
const selectShow = document.querySelector('#show-select');
const selectPage = document.querySelector('#page-select');
const selectBrand = document.querySelector('#brand-select');
const selectSort = document.querySelector('#sort-select');


const sectionProducts = document.querySelector('#products');
const spanNbProducts = document.querySelector('#nbProducts');
const spanNbRecentProducts = document.querySelector('#nbRecentProducts');
const LasDate = document.querySelector('#LasReleasedDate');

/**
 * Set global valuee
 * @param {Array} result - products to display
 * @param {Object} meta - pagination meta info
 */
const setCurrentProducts = ({result, meta}) => {
  currentProducts = result;
  currentPagination = meta;

};

/**
 * Fetch products from api
 * @param  {Number}  [page=1] - current page to fetch
 * @param  {Number}  [size=12] - size of the page
 * @return {Object}
 */
const fetchProducts = async (page = 1, size = 12) => {
  try {
    const response = await fetch(
      `https://clear-fashion-api.vercel.app?page=${page}&size=${size}`
    );
    const body = await response.json();

    if (body.success !== true) {
      console.error(body);
      return {currentProducts, currentPagination};
    }

    return body.data;
  } catch (error) {
    console.error(error);
    return {currentProducts, currentPagination};
  }
};

/**
 * Render list of products
 * @param  {Array} products
 */

function sortt (productss,sortBy)
{

if(sortBy =="none")
{
  return productss
}
if(sortBy == "price-asc")
{
  return productss.filter(products => products.price<=50);
}
if(sortBy == "price-desc")
{
  return productss.filter(products => products.price>50);
}
if(sortBy == "sort-price-asc")
{
  return productss.sort((a,b) => a.price - b.price);
}
if(sortBy == "sort-price-desc")
{
  return productss.sort((a,b) => b.price - a.price);
}
if(sortBy == "date-asc")
{
  return productss.sort((a,b) => new Date(a.released) - new Date(b.released));
}
if(sortBy == "date-desc")
{
  return productss.sort((a,b) => new Date(b.released) - new Date(a.released));
}
if(sortBy == "2-week-less")
{
   return productss.filter(product => (Math.round((new Date() - new Date(product.released))/86400000)) <= 15)
}
else
{
  return productss
}

}


const renderProducts = products => {
  let sortedProduct = [];
  sortedProduct = sortt(products, currentSort);
  const fragment = document.createDocumentFragment();
  const div = document.createElement('div');
  let template = sortedProduct.map(product => {
      return `
      <div class="product" id=${product.uuid}>
        <span>${product.brand}</span>
        <a href="${product.link}">${product.name}</a>
        <span>${product.price + "€"}</span>
        <span>${product.released}</span>
      </div>
    `;
    });
    template = template.join('');

  div.innerHTML = template;
  fragment.appendChild(div);
  sectionProducts.innerHTML = '<h2>Products</h2>';
  sectionProducts.appendChild(fragment);
};


/**
 * Render page selector
 * @param  {Object} pagination
 */
const renderPagination = pagination => {
  const {currentPage, pageCount} = pagination;
  const options = Array.from(
    {'length': pageCount},
    (value, index) => `<option value="${index + 1}">${index + 1}</option>`
  ).join('');

  selectPage.innerHTML = options;
  selectPage.selectedIndex = currentPage - 1;
};

const renderBrand = pagination => {
  const name_brand  = []
  currentProducts.forEach(elt => {
    if(name_brand.includes(elt.brand)==false)
    {
      name_brand.push(elt.brand)
    }
  });
  let options = '<option value="all">All</option>';
  options += Array.from(
    {'length': name_brand.length},
    (value, index) => `<option value="${name_brand[index]}">${name_brand[index]}</option>`
  ).join('');

  selectBrand.innerHTML = options;
  selectBrand.selectedIndex = 0;
};


/**
 * Render page selector
 * @param  {Object} pagination
 */

function min()
{
  let today = new Date();
  var one_day=1000*60*60*24;
  let minday;
  var min = 15;
  for(var i = 0; i < currentProducts.length; i++)
  {
    let date = new Date(currentProducts[i].released)
    let diff = today - date;
    var day = Math.round(diff/one_day)
    if(day<min)
    {
      min = day
      minday = new Date(currentProducts[i].released);
    }
  }
  return minday;
}
 function recent()
 {
  let today = new Date();
  var one_day=1000*60*60*24;
  for(var i = 0; i < currentProducts.length; i++)
  {
    let date = new Date(currentProducts[i].released)
    let diff = today - date;
    var day = Math.round(diff/one_day)
    if(day<15)
    {
       RecentProducts.push(currentProducts[i])
    }
  }
 }
const renderIndicators = pagination => {
 const {count} = pagination;
 recent()
 spanNbProducts.innerHTML = count;
 spanNbRecentProducts.innerHTML = RecentProducts.length;
 let daate = min()
 LasDate.innerHTML = daate;
 //one_day=1000*60*60*24;
  /*for(var i = 0; i < currentProducts.length; i++)
  {
    let date = new Date(currentProducts[i].released)
    let diff = today - date;
    var day = Math.round(diff/one_day)
    if(day<400)
    {
       RecentProducts.push(currentProducts[i])
    }
  }*/
 //RecentProducts.push(currentProducts[i])
 //spanNbProducts.innerHTML = RecentProducts.length;
  
  
};


const render = (products, pagination) => {
  //renderProducts1(products)
  renderProducts(products)
  renderIndicators(pagination);
  renderPagination(pagination);
  renderBrand(pagination);
  //renderProducts(products);
  
 // console.log(currentProducts)
  //console.log("lol")

  

  
  
  //var ladate=new Date();
  //console.log(ladate.getFullYear())
};

/**
 * Declaration of all Listeners
 */

/**
 * Select the number of products to display
 * @type {[type]}
 */
selectShow.addEventListener('change', event => {
  fetchProducts(currentPagination.currentPage, parseInt(event.target.value))
    .then(setCurrentProducts)
    .then(() => render(currentProducts, currentPagination));
});

selectPage.addEventListener('change', event => {
  fetchProducts(parseInt(event.target.value),selectShow.value)
    .then(setCurrentProducts)
    .then(() => render(currentProducts, currentPagination));
});
function filterBy_brand(brand) {
  return function(element) {
      return element.brand == brand;
  }
}
selectBrand.addEventListener('change', event => {

  if(event.target.value != "all"){
    renderProducts(currentProducts.filter(filterBy_brand(event.target.value)));

  }
  else {
    renderProducts(currentProducts);
  }
});




selectSort.addEventListener('change', event => {
currentSort = event.target.value;
renderProducts(currentProducts)
/*
if(event.target.value == "price-asc")
{
  renderProducts(currentProducts.filter(product => product.price<=50));
}
if(event.target.value == "price-desc")
{
  renderProducts(currentProducts.filter(product => product.price>50));
}
if(event.target.value == "sort-price-asc")
{
  renderProducts(currentProducts.sort((a,b) => a.price - b.price));
}
if(event.target.value == "sort-price-desc")
{
  renderProducts(currentProducts.sort((a,b) => b.price - a.price));
}
if(event.target.value == "date-asc")
{
  renderProducts(currentProducts.sort((a,b) => new Date(a.released) - new Date(b.released)));
}
if(event.target.value == "date-desc")
{
  renderProducts(currentProducts.sort((a,b) => new Date(b.released) - new Date(a.released)));
}
if(event.target.value == "2-week-less")
{
  renderProducts(currentProducts.filter(product => (Math.round((new Date() - new Date(product.released))/86400000)) <= 15)).then(setCurrentProducts)
    .then(() => render(currentProducts, currentPagination));
}
*/
});

document.addEventListener('DOMContentLoaded', () =>
  fetchProducts()
    .then(setCurrentProducts)
    .then(() => render(currentProducts, currentPagination))
);