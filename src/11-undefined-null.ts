(()=>{

    // let myNumber:number = null;
    // let myString: string = undefined;

    // Queda como tipo any
    let myNull: null = null; 
    let myUndefined: undefined = undefined; 

    let myNumber:number | null = null;
    myNumber = 0;
    let myString: string | undefined = undefined;
    myString = 'abc';

    function hi( name : string |null ) {
        let hello = 'Hola '
        if(name){
            hello += name
        }else{
            hello += 'noBody'
        }
        console.log(hello);
    }
    hi('luis');

    function hiV2( name : string |null ) {
        let hello = 'Hola '
        /**
         * podemos utlizar el operator nullish coalescing ?? en lugar de operador OR ||
         * simplidficamos el IF con el operador opcional chaining  ?
         */
        hello += name?.toLowerCase() ?? 'noBody';  
        console.log(hello);
    }

    hiV2(null);

})();