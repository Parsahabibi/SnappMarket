// import { Image } from 'next/image';
interface data{
    id:number,
    image:any,
    name:string,
    description:string,
    Discount:number,
    oprice?:string,
    price:string
}
export default data;


export interface image{
    id:number ,
    image:string|any
}