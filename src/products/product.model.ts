export type TSizes =  "SM" | "ME" | "LA" | "2XL";
export type Product = {
    title:string,
    creatAt:Date,
    stock:number,
    sizes?:TSizes
}