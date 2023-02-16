import {  calcStock, addProduct, arrayProducts} from './product.service';


addProduct({
    title:'product1',
    creatAt:new Date(),
    stock:20
});
addProduct({
    title:'product1',
    creatAt:new Date(),
    stock:20,
    sizes: 'LA'
});

console.log(arrayProducts);


const total = calcStock();

console.log('Total: ' + total);


