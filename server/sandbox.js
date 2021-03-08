/* eslint-disable no-console, no-process-exit */
const dedicatedbrand = require('./sources/dedicatedbrand');
const mudjeans= require('./sources/Mudjeans');
const axios = require('axios');
const cheerio = require('cheerio');






async function sandbox (eshop = 'https://www.dedicatedbrand.com/en/men') {
  try {
    console.log(`🕵️‍♀️  browsing ${eshop}`);

    const links = await dedicatedbrand.scrapeLinks(eshop);
    console.log(links);
    finalproduct=[];
    console.log(links[1].href);
    for (let i=1; i<links.length;i++){
      sublink = links[i].href;
      console.log(sublink)
      products = await dedicatedbrand.scrape(sublink);
      for (let j=0; j<products.length;j++){
        finalproduct.push(products[j])
      }
    }
    // const products = await dedicatedbrand.scrape('https://www.dedicatedbrand.com/en/men/t-shirts');
    console.log(finalproduct);
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


