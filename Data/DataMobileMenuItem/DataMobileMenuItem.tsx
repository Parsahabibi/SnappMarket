import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import QrCodeOutlinedIcon from '@mui/icons-material/QrCodeOutlined';
export const dataMobileMenuItem =[
    {id:1,title:'خانه',icon:<HomeOutlinedIcon style={{ width: "25px", height: "25px" }} />,href:'/'},
    {id:2,title:'دسته بندی',icon:<QrCodeOutlinedIcon  style={{ width: "25px", height: "25px" }} />,href:'/categories'},
    {id:3,title:'سبد خرید',icon:<ShoppingCartOutlinedIcon style={{ width: "25px", height: "25px" }} />,href:'/basket'},
]