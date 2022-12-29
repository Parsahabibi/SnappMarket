import image1 from '../assets/Images/ImageFooter/image1.png'
import image2 from '../assets/Images/ImageFooter/image2.png'
import image3 from '../assets/Images/ImageFooter/image3.png'
import image4 from '../assets/Images/ImageFooter/image4.png'
import bazzar from '../assets/Images/ImageFooter/bazzar.png'
import google from '../assets/Images/ImageFooter/google.png'
import iapps from '../assets/Images/ImageFooter/iapps.png'
import sibapp from '../assets/Images/ImageFooter/sibapp.png'
import image5 from '../assets/Images/ImageFooter/newMobile.png'

import { dataApplicationFooterType, dataGoodsFooterType } from "../Model/DataSendGoodsFooterType"
export const dataGoodsFooter:dataGoodsFooterType[]=[
    {id:1,image:image2,Description:'کالاها با قیمت کمتر از درج شده ارسال میشود',title:'تخفیف بیشتر محصولات'},
    {id:2,image:image1,Description:'سفارشات شما در زمان مقرر ارسال می‌شود',title:'ارسال به موقع سفارش ها'},
    {id:3,image:image3,Description:'محصولات ارسالی از بین بهترین‌ها گلچین می‌شود',title:'ارسال بهترین کالا ها'},
    {id:4,image:image4,Description:'سفارشات با بسته‌بندی مناسب ارسال می‌شود',title:' بسته بندی مناسب'},
]
export const dataApplicationFooter:dataApplicationFooterType[]=[
    {id:1,image:bazzar,title:'bazzar',width:151,height:45},
    {id:2,image:google,title:'google',width:151,height:45},
    {id:3,image:sibapp,title:'sibapp',width:151,height:45},
    {id:4,image:iapps,title:'iapps',width:151,height:45},
    {id:5,image:image5,title:'newMobile',width:520,height:320},
   
]