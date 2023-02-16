(() =>{
    type TSizes =  "SM" | "ME" | "LA" | "2XL";
    type Product = {
        title:string,
        creatAt:Date,
        stock:number,
        sizes?:TSizes
    }

    const arrayProducts: Product [] = []

    const addProduct = (data: Product) =>{
        arrayProducts.push(data);
    }

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

    console.log('arrayProducts -->',arrayProducts);

    

})();