/* eslint-disable no-console, no-process-exit */
const dedicatedbrand = require('./sites/dedicatedbrand');
const loom = require('./sites/loom');
const db = require('./db');

async function sandbox () {
  try {
    let products = [];
    let pages = [
      'https://www.dedicatedbrand.com/en/men/basics',
      'https://www.dedicatedbrand.com/en/men/sale'
    ];

    console.log(`🕵️‍♀️  browsing ${pages.length} pages with for...of`);

    // Way 1 with for of: we scrape page by page
    for (let page of pages) {
      console.log(`🕵️‍♀️  scraping ${page}`);

      let results = await dedicatedbrand.scrape(page);

      console.log(`👕 ${results.length} products found`);

      products.push(results);
    }

    pages = [
      'https://www.loom.fr/collections/hauts',
      'https://www.loom.fr/collections/bas'
    ];

    console.log('\n');

    console.log(`🕵️‍♀️  browsing ${pages.length} pages with Promise.all`);

    const promises = pages.map(page => loom.scrape(page));
    const results = await Promise.all(promises);

    console.log(`👕 ${results.length} results of promises found`);
    console.log(`👕 ${results.flat().length} products found`);

    console.log(results);
    console.log(results.flat());

    products.push(results.flat());
    products = products.flat();

    console.log('\n');

    console.log(`👕 ${products.length} total of products found`);

    console.log('\n');

    const result = await db.insert(products);

    console.log(`💽  ${result.insertedCount} inserted products`);

    console.log('\n');

    console.log('💽  Find Loom products only');

    const loomOnly = await db.find({'brand': 'loom'});

    console.log(`👕 ${loomOnly.length} total of products found for Loom`);
    console.log(loomOnly);

    db.close();
  } catch (e) {
    console.error(e);
  }
}

sandbox();






/* eslint-disable no-console, no-process-exit */

/*
const dedicatedbrand = require('./sources/dedicatedbrand');
const mudjeans= require('./sources/Mudjeans');
const axios = require('axios');
const cheerio = require('cheerio');
const db = require('./db');






async function sandbox (eshop = 'https://www.dedicatedbrand.com/en/men') {
  try {
    console.log(`🕵️‍♀️  browsing ${eshop}`);

    const links = await dedicatedbrand.scrapeLinks(eshop);
    console.log(links);
    finalproduct=[];
    console.log(links[1].href);
    for (let i=1; i<links.length-1;i++){
      sublink = links[i].href;
      console.log(sublink)
      products = await dedicatedbrand.scrape(sublink);
      for (let j=0; j<products.length;j++){
        finalproduct.push(products[j])
      }
    }
    // const products = await dedicatedbrand.scrape('https://www.dedicatedbrand.com/en/men/t-shirts');
    //console.log(finalproduct);
    const result = await db.insert(finalproduct);

    console.log('done');
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

const [,, eshop] = process.argv;
sandbox(eshop);
/*
async function sandbox (eshop= "https://www.dedicatedbrand.com") {
  try {

    const reponse = await axios(eshop);
    const {data, status} = reponse;
    const $ = cheerio.load(data);
    let sumProducts = [];
    //const products = [];
    if(eshop == "https://www.dedicatedbrand.com")
    {
      const subcategory = $('.mainNavigation-link-subMenu-link.mainNavigation-link-subMenu-link--image').map(async(i,element) => {
      link = 'https://www.dedicatedbrand.com' + $(element).find('a').attr('href');
      //console.log(link)
      console.log(`🕵️‍♀️  browsing ${link}`);
      const products = await dedicatedbrand.scrape(link);
      for(var i=0; i< products.length;i++)
      {
        sumProducts.push(products[i])
      }
      console.log(sumProducts)
    });
    }
    if(eshop == "https://mudjeans.eu/collections/men")
    {

      sumProducts = mudjeans.scrape2(eshop);

    }
   
    
    console.log(`🕵️‍♀️  browsing ${eshop} source`);
    const products = await dedicatedbrand.scrape(eshop);
    //const products = await mudjeans.scrape2(eshop);
    // console.log(products)
    //console.log(products.length)
    //console.log(sumProducts)
    //console.log(sumProducts.length)
    //console.log(products)
    //console.log(products.length)    
    console.log('done');
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}
/*

const [,, eshop] = process.argv;

sandbox(eshop);










/*

const dedicatedbrand = require('./sources/dedicatedbrand');

async function sandbox (eshop= "https://www.dedicatedbrand.com/en/men/t-shirts") {
  try {


    const reponse = await axios(eshop);
    console.log(`🕵️‍♀️  browsing ${eshop} source`);

    const products = await dedicatedbrand.scrape(eshop);

    console.log(products);
    console.log('done');
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

const [,, eshop] = process.argv;

sandbox(eshop);

*/
