import dataSearch, { dataCardSearch } from "../../Model/SearchType"
import panircard1 from "../../assets/Images/panircard1.jpg"
import panircard2 from "../../assets/Images/panircard2.jpg"
import panircard3 from "../../assets/Images/panircard3.jpg"
import panircard4 from "../../assets/Images/panircard4.jpg"
const dataSearch: dataSearch[] = [
    { id: 1, name: "پنیر" },
    { id: 2, name: "شیر" },
    { id: 3, name: "روغن" },
    { id: 4, name: "ماست" },
    { id: 5, name: "برنج" },
    { id: 6, name: "گوشت" },
    { id: 7, name: "مرغ" },
]
export default dataSearch

export const dataCard : dataCardSearch[] = [
    { id: 1, image:panircard1 , title: 'پنیر سفید کم چرب روزانه ۵۱۵ گرمی', discount: 19, oprice: "61,000", price: "49,410 " },
    { id: 2, image:panircard2 , title: 'پنیر خامه ای پرچرب ویلی کاله ۲۰۰ گرم', discount: '', oprice: "", price: "29,900 " },
    { id: 3, image:panircard3 , title: 'پنیر سفید نیم چرب کاله ۴۰۰ گرمی', discount: '', oprice: "", price: "37,000 " },
    { id: 4, image:panircard4 , title: 'پنیر سفید نیم چرب روزانه ۲۱۰ گرمی', discount: '', oprice: "", price: "25,500 " },
]