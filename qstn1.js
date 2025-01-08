const products = [
    { pid: 100, pName: 'Apple', brand: '5G', price: 120000, display: 'LCD' },
    { pid: 101, pName: 'Samsung', brand: '4G', price: 90000, display: 'AMOLED' },
    { pid: 102, pName: 'OnePlus', brand: '4G', price: 75000, display: 'Fluid AMOLED' },
    { pid: 103, pName: 'Pixel', brand: '3G', price: 85000, display: 'LCD' },
    { pid: 104, pName: 'Xiaomi', brand: '3G', price: 40000, display: 'Super AMOLED' }
];















// print product name only
products.forEach((a)=>console.log(a['pName']))

// print all mobile details whose display is lcd : 
products.forEach((a)=>a['display']=="LCD"?console.log(a):'')

// print 3g mobile phone names :
products.forEach((a)=>a['brand']=="3G"?console.log(a['pName']):'')

// sort mobile based on price
console.log(products.sort((a,b)=>a['price']-b['price']))


// print costly mobile price
let lowCostMobilePrice=0
for(let eachMobile in products){
       if(lowCostMobilePrice<products[eachMobile]['price']){
        lowCostMobilePrice=products[eachMobile]['price']
       }
    }
    console.log(lowCostMobilePrice)


// print low cost mobile
let lowCost = Infinity;

products.forEach((a) => {
  if (a['price'] < lowCost) {
    lowCost = a['price'];
   
  }
});

console.log(lowCost)