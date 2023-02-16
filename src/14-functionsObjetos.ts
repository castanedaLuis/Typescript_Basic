(() =>{


    const loggin = (data:{email:string, password:string}) =>{

        console.log(`Email: ${data.email} , password: ${data.password}`);
        
    }

    //loggin('luis@mail.com', '123');
    loggin({
        email: 'luis@mail.com',
        password: '123',
    })

    type TSizes =  "SM" | "ME" | "LA" | "2XL";
    const arrayProducts: any [] = []

    const addProduct = (data:{
        title:string,
        creatAt:Date,
        stock:number,
        sizes?:TSizes
    }) =>{
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