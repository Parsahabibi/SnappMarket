import {DataBaseDrink} from './CategoryDrink'


export const getDrink = (drink:string) => {
    return new Promise((resolve, reject) => {
        resolve(DataBaseDrink.filter(item => item.name === drink))
    })
}