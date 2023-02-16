(()=>{

    //Especificamos el tipo de retorno :number --> despues de los ()
    const calcTotal = (prices:number[]): string =>{
        let total = 0;
        prices.forEach(item =>{
            total += item
        })

        return total.toString();
    }

    const rta = calcTotal([1,1,1]);
    console.log(rta);

    //funciones que no tienen retorno --> deben de ser tipo VOID 

    const printTotal = (price:number[]): void =>{
        const rta = calcTotal(price);
        console.log('Total: '+ rta);
    };

    printTotal([1,2,3,4]);
    


})();