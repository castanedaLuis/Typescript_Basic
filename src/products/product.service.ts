import { Product } from './product.model'

export const arrayProducts: Product [] = []

export const addProduct = (data: Product) =>{
    arrayProducts.push(data);
}


export const calcStock = ():number =>{
    let total = 0;
    arrayProducts.forEach(element => {
        total += element.stock;
    });
    return total;
}