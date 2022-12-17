interface dataSearch{
    id:number,
    name:string,
}
export default dataSearch;

export interface dataCardSearch{
    id:number ,
    image:any| string,
    title:string,
    discount?:string|number,
    oprice?:string|number,
    price:string|number
}
