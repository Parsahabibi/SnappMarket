import cheese from "../../assets/Images/cheese.jpg"
import khame from "../../assets/Images/khame.jpg"
import mast from "../../assets/Images/mast.jpg"
import dogh from "../../assets/Images/dogh.jpg"
import mosir from "../../assets/Images/mosir.jpg"
import fruit from "../../assets/Images/fruit.jpg"
import mastharaz from "../../assets/Images/mastharaz.jpg"
import mastseven from "../../assets/Images/mastseven.jpg"
import chedarcheese from "../../assets/Images/chedarcheese.jpg"

import data from "../../Model/ProductContainerType"
const data:data[] = [
    {id:1 ,  image: cheese, name: "پنیر لبنه پر چرب کاله", description: "350 گرم", Discount: 25, oprice: '39,900', price: '29,925' },
    {id:2 ,  image: khame, name: "خامه نیم چرب هراز", description: "200 گرم", Discount: 20, oprice: "23,900", price: '19,120' },
    {id:3 ,  image: mast, name: "ماست همزده کم چرب پروبیوتیک سیو هراز", description: "کیلوگرم 1.8", Discount: 22, oprice: "69,800", price: '54,444' },
    {id:4 ,  image: dogh, name: "دوغ گازدار آبعلی", description: "1 لیتر", Discount: 24, oprice: "21,000", price: '15,960' },
    {id:5 ,  image: mosir, name: "ماست چکیده موسیر پر چرب کاله", description: "500 گرم", Discount: 6, price: '35,500' },
    {id:6 ,  image: fruit, name: "ماست همزده میوه ای نیم چرب کاله", description: "125 گرم", Discount: 10, oprice: "12,600", price: '11,340' },
    {id:7 ,  image: mastharaz, name: " ماست همزده پر چرب پروبیوتیک سیو هراز", description: "1.8 کیلوگرم", Discount: 22, oprice: "69,800", price: '54,444' },
    {id:8,  image: mastseven, name: "ماست همزده کم چرب سون کاله", description: "2.2 کیلوگرم", Discount: 19, oprice: "85,000", price: '68,850' },
    {id:9 ,  image: chedarcheese, name: "پنیر چدار ورقه ای کاله", description: "180 گرم", Discount: 25, oprice: "55,500", price: '41,625' },
]

export default data