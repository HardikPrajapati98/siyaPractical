import {apiEndPoint} from "./apiEndPoint";

export const apiServices = {
    getCountry : () => {
        return new Promise(async (resolve, reject) => {
            await fetch(apiEndPoint.getCountry).then((response) =>{
                resolve(response.json())
            }).catch((error) => {
                reject(error)
            })

        })
    }
}
