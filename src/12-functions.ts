(() =>{

    type TSizes =  "SM" | "ME" | "LA" | "2XL";
    
    function createPersonJson(
        title:string,
        creatAt:Date,
        stock:number,
        sizes:TSizes
    ){
        return{
            title,
            creatAt,
            stock,
            sizes
        }
        
    }

    const product1 = createPersonJson('p1',new Date(),12,'SM');
    console.log(product1);


    // sizes es opcional --> ?
    const createPersonJsonV2 = (
        title:string,
        creatAt:Date,
        stock:number,
        sizes?:TSizes
    ) =>{
        return{
            title,
            creatAt,
            stock,
            sizes
        }
        
    }
    const product2 = createPersonJsonV2('p2',new Date(),30);
    console.log(product2);

})();