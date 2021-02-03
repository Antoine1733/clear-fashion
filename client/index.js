// Invoking strict mode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode
'use strict';

console.log('🚀 This is it.');

const MY_FAVORITE_BRANDS = [{
  'name': 'Hopaal',
  'url': 'https://hopaal.com/'
}, {
  'name': 'Loom',
  'url': 'https://www.loom.fr'
}, {
  'name': 'ADRESSE',
  'url': 'https://adresse.paris/'
}]

console.table(MY_FAVORITE_BRANDS);
console.log(MY_FAVORITE_BRANDS[0]);



/**
 * 🌱
 * Let's go with a very very simple first todo
 * Keep pushing
 * 🌱
 */

// 🎯 TODO: The cheapest t-shirt
// 0. I have 3 favorite brands stored in MY_FAVORITE_BRANDS variable
// 1. Create a new variable and assign it the link of the cheapest t-shirt
const l = 'https://www.loom.fr/collections/tous-les-vetements/products/le-t-shirt'
// I can find on these e-shops
// 2. Log the variable
console.log(l)






/**
 * 👕
 * Easy 😁?
 * Now we manipulate the variable `marketplace`
 * `marketplace` is a list of products from several brands e-shops
 * The variable is loaded by the file data.js
 * 👕
 */

// 🎯 TODO: Number of products
// 1. Create a variable and assign it the number of products
 const variable = marketplace.length
 
// 2. Log the variable
console.log(variable)


// 🎯 TODO: Brands name
// 1. Create a variable and assign it the list of brands name only
const brands_array = []
marketplace.forEach(elt => {brands_array.push(elt.brand)});
// 2. Log the variable
console.table(brands_array)
// 3. Log how many brands we have
let cpt = 0
const brands_array2 = []
marketplace.forEach(elt => {

	if (brands_array2.includes(elt.brand)==false)
	{
		brands_array2.push(elt.brand)
		cpt = cpt + 1
	}
		
}
	)
console.log(brands_array2.length)
console.log(cpt)



// 🎯 TODO: Sort by price
// 1. Create a function to sort the marketplace products by price
function compare(a,b) {
  if (a.price < b.price)
     return -1;
  if (a.price > b.price)
    return 1;
  return 0;
}

const array = marketplace
////marketplace.sort((a,b) => a.price - b.price);
//console.table(array)
// 2. Create a variable and assign it the list of products by price from lowest to highest
// 3. Log the variable


// 🎯 TODO: Sort by date
// 1. Create a function to sort the marketplace objects by products date
function compare2(a,b) {
  if (a.date < b.date)
     return -1;
  if (a.date > b.date)
    return 1;
  return 0;
}
// 2. Create a variable and assign it the list of products by date from recent to old
//const array2 = marketplace
//array2.sort(compare2)
// 3. Log the variable
//console.table(array2)
marketplace.sort((a,b) => new Date(a.released) - new Date(b.released));
console.table(marketplace)


// 🎯 TODO: Filter a specific price range
// 1. Filter the list of products between 50€ and 100€
const marketplace2 = marketplace.filter(elt => elt.price >50 && elt.price <100)
// 2. Log the list
console.table(marketplace2)

// 🎯 TODO: Average Basket
// 1. Determine the average basket of the marketplace
function Find_averagePrice(list){
  var sum = 0;
  list.forEach(element => {
    sum += element.price;
  });
  return sum/list.length;
}

const avg_price = Find_averagePrice(marketplace);
// 2. Log the average
console.log(avg_price);




/**
 * 🏎
 * We are almost done with the `marketplace` variable
 * Keep pushing
 * 🏎
 */

// 🎯 TODO: Products by brands
// 1. Create an object called `brands` to manipulate products by brand name
// The key is the brand name
// The value is the array of products
//
// Example:
// const brands = {
//   'brand-name-1': [{...}, {...}, ..., {...}],
//   'brand-name-2': [{...}, {...}, ..., {...}],
//   ....
//   'brand-name-n': [{...}, {...}, ..., {...}],
// };

const brands = {};
marketplace.forEach(function(product) {
	brands[product.brand]= marketplace.filter(k => k.brand == product.brand);
})
console.log('lol')
console.table(brands);


//
// 2. Log the variable
// 3. Log the number of products by brands
for(let i in brands){
   console.log(brands[i].length);
}

// 🎯 TODO: Sort by price for each brand
// 1. For each brand, sort the products by price, from highest to lowest
for(let i in brands){
   brands[i].sort((a,b) => a.price - b.price);

}
// 2. Log the sort
for(let i in brands){
   console.log(brands[i]);
}


// 🎯 TODO: Sort by date for each brand
// 1. For each brand, sort the products by date, from old to recent
for(let i in brands){
   brands[i].sort((a,b) => new Date(a.date) - new Date(b.date));
;

}
// 2. Log the sort
for(let i in brands){
   console.log(brands[i]);
}





/**
 * 💶
 * Let's talk about money now
 * Do some Maths
 * 💶
 */

// 🎯 TODO: Compute the p90 price value
// 1. Compute the p90 price value of each brand
// The p90 value (90th percentile) is the lower value expected to be exceeded in 90% of the products





/**
 * 🧥
 * Cool for your effort.
 * It's almost done
 * Now we manipulate the variable `COTELE_PARIS`
 * `COTELE_PARIS` is a list of products from https://coteleparis.com/collections/tous-les-produits-cotele
 * 🧥
 */

const COTELE_PARIS = [
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-baseball-cap-gris',
    price: 45,
    name: 'BASEBALL CAP - TAUPE',
    uuid: 'af07d5a4-778d-56ad-b3f5-7001bf7f2b7d',
    released: '2021-01-11'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-navy',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - NAVY',
    uuid: 'd62e3055-1eb2-5c09-b865-9d0438bcf075',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-veste-fuchsia',
    price: 110,
    name: 'VESTE - FUCHSIA',
    uuid: 'da3858a2-95e3-53da-b92c-7f3d535a753d',
    released: '2020-11-17'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-baseball-cap-camel',
    price: 45,
    name: 'BASEBALL CAP - CAMEL',
    uuid: 'b56c6d88-749a-5b4c-b571-e5b5c6483131',
    released: '2020-10-19'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-beige',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - BEIGE',
    uuid: 'f64727eb-215e-5229-b3f9-063b5354700d',
    released: '2021-01-11'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-veste-rouge-vermeil',
    price: 110,
    name: 'VESTE - ROUGE VERMEIL',
    uuid: '4370637a-9e34-5d0f-9631-04d54a838a6e',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-bordeaux',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - BORDEAUX',
    uuid: '93d80d82-3fc3-55dd-a7ef-09a32053e36c',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/le-bob-dylan-gris',
    price: 45,
    name: 'BOB DYLAN - TAUPE',
    uuid: 'f48810f1-a822-5ee3-b41a-be15e9a97e3f',
    released: '2020-12-21'
  }
]

// 🎯 TODO: New released products
console.table(COTELE_PARIS)
// // 1. Log if we have new products only (true or false)
// // A new product is a product `released` less than 2 weeks.
//for(let i in COTELE_PARIS){
	//if (new Date(COTELE_PARIS[i].released) - new Date(b.date)) {}
   //.log(COTELE_PARIS[i]);
//}


// 🎯 TODO: Reasonable price
// // 1. Log if coteleparis is a reasonable price shop (true or false)
// // A reasonable price if all the products are less than 100€


// 🎯 TODO: Find a specific product
// 1. Find the product with the uuid `b56c6d88-749a-5b4c-b571-e5b5c6483131`
// 2. Log the product
for(let i in COTELE_PARIS){
	if (COTELE_PARIS[i].uuid=='b56c6d88-749a-5b4c-b571-e5b5c6483131') {
		console.log(COTELE_PARIS[i]);
	}   
}



// 🎯 TODO: Delete a specific product
// 1. Delete the product with the uuid `b56c6d88-749a-5b4c-b571-e5b5c6483131`
for(let i in COTELE_PARIS){
	if (COTELE_PARIS[i].uuid=='b56c6d88-749a-5b4c-b571-e5b5c6483131') {
		delete COTELE_PARIS[i];
	}   
}
// 2. Log the new list of product
console.table(COTELE_PARIS)

// 🎯 TODO: Save the favorite product
let blueJacket = {
  'link': 'https://coteleparis.com/collections/tous-les-produits-cotele/products/la-veste-bleu-roi',
  'price': 110,
  'uuid': 'b4b05398-fee0-4b31-90fe-a794d2ccfaaa'
};

// we make a copy of blueJacket to jacket
// and set a new property `favorite` to true
let jacket = blueJacket;
jacket.favorite = true;

// 1. Log `blueJacket` and `jacket` variables
console.log(jacket)
console.log(blueJacket)
// 2. What do you notice?
//It's the same

blueJacket = {
  'link': 'https://coteleparis.com/collections/tous-les-produits-cotele/products/la-veste-bleu-roi',
  'price': 110,
  'uuid': 'b4b05398-fee0-4b31-90fe-a794d2ccfaaa'
};

// 3. Update `jacket` property with `favorite` to true WITHOUT changing blueJacket properties





/**
 * 🎬
 * The End
 * 🎬
 */

// 🎯 TODO: Save in localStorage
// 1. Save MY_FAVORITE_BRANDS in the localStorage
// 2. log the localStorage
