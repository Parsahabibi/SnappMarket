import dataAccount from "../../Model/AccountType";
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';


const DataAccount: dataAccount[] = [
    { id: 1, title: "ورود و عضویت", icon: <LoginOutlinedIcon sx={{width:24 , height:24}}/>},
    { id: 2, title: "گزارش مشکل ", icon: <AnnouncementOutlinedIcon sx={{width:24 , height:24}}/> },
    { id: 3, title: "تماس با پشتیبانی", icon: <PhoneOutlinedIcon sx={{width:24 , height:24}}/> },
    { id: 4, title: "چت با پشتیبانی", icon: <HeadsetMicIcon sx={{width:24 , height:24}}/>},
]
export default DataAccount;
