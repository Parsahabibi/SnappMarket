import {DataBaseCosmetics} from './CategoryCosmetics'

export const getCosmetics = (cosmetics:string) => {
    return new Promise((resolve, reject)=>{
        resolve(DataBaseCosmetics.filter(item => item.name === cosmetics))
    })
}

