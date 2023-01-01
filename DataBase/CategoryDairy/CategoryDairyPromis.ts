import {DataBaseDairy} from './CategoryDairy'


export const getDairy = (dairy:string) => {
    return new Promise((resolve, reject)=>{
        resolve(DataBaseDairy)
    })
}

