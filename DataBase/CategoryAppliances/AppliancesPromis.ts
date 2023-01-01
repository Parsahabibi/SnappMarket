import {DataBaseAppliances} from './Appliances'


export const getCosmetics = (appliances:string) => {
    return new Promise((resolve, reject)=>{
        resolve(DataBaseAppliances)
    })
}

