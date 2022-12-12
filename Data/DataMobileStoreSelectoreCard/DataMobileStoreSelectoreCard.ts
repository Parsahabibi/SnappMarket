import { DataMobileStoreSelectoreCardType, MobileStoreSelectoreCardType } from "../../Model/MobileStoreSelectoreCardType";
import image1 from '../../assets/Images/ImageCardStoreSelectoreCard/image1.jpg'
import image2 from '../../assets/Images/ImageCardStoreSelectoreCard/image2.jpg'
import backgroundimage from '../../assets/Images/ImageCardStoreSelectoreCard/image3.svg'
export const dataStoreSelectoreCard:DataMobileStoreSelectoreCardType[]=[
   {id:1,image:image1,title:'هایپر استار',dis:'ارزان و پر تخفیف',Discount:'تا 65% تخفیف',bgcolor:'rgb(17, 226, 158)',bgcolor2:'rgb(11, 150, 105)',backgroundimage:backgroundimage},
   {id:2,image:image2,title:'مایلی',dis:'آرایشی و بهداشتی',Discount:'تا 84% تخفیف',bgcolor:'rgb(255, 168, 65)',bgcolor2:'rgb(238, 129, 0)',backgroundimage:''},
]
export const dataStoreSelectoreSendCard:MobileStoreSelectoreCardType[]=[
   {id:1,title:'ارسال رایگان بالای 200٬000 تومان',dis:'تحویل از امروز ساعت 10:00',bgcolor:'rgb(14, 188, 131)'},
   {id:2,title:'ارسال رایگان بالای 150٬000 تومان',dis:'تحویل از امروز ساعت 9:00',bgcolor:'rgb(255, 168, 65)'},
]