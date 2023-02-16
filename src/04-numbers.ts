(() =>{

    let productPrice = 80;
    productPrice = 10;

    console.log('Price', productPrice);

    let customerAge:number = 26;
    customerAge = customerAge + 2;
    //customerAge = customerAge + '1'; 261

    console.log('customerAge', customerAge);

    let productInStokc:number;

    console.log('productInStokc', productInStokc);
    if(productInStokc > 100){
        console.log('apply');
        
    }else{
        console.log('No apply');
        
    }

    let hex = 0xfff;
    console.log('hex',hex);
    let binario = 0b1010; //TS analiza que si sea un binario, que solo contenga 0 y 1
    console.log('binario',binario);

        //Number !== number
        // ❌         ✅    
    
    
    
})();