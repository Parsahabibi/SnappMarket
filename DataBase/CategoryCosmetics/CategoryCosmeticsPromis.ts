import {DataBaseCosmetics} from './CategoryCosmetics'


export const getCosmetics = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        return DataBaseCosmetics
    } , 3)
})

