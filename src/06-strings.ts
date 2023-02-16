(() => {

    let name = 'Luis';
    // name = 8;
    // name = ()=>{}
    // name = null;


    let lastName:string = 'castañeda';
    console.log('Name: ' + name + ' ' + lastName);

    let description = "Este perfil es de una cuenta customer";
    console.log('description: ' + description);


    let isNew: boolean = true;

    let address:string = `
        calle: TypeScript
        nombre: ${name}
        isNew: ${isNew}
    `;
    

    console.log(address);
    
        //String !== string
        // ❌         ✅


})();