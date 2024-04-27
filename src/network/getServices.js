import { apiEndPoint } from "./apiEndPoint";
import { apiRequest } from "./index";

export const apiServices = {
    getCountry: () => {
        return new Promise(async (resolve, reject) => {
                await  apiRequest.getReuest(apiEndPoint.getCountry).then((response) => {
                resolve(response)
            }).catch((error) => {
                reject(error)
            })

        })
    },
     getWheatherForcast: (payload) => {
        return new Promise(async (resolve, reject) => {
                await  apiRequest.getReuest(apiEndPoint.getWheather(payload)).then((response) => {
                resolve(response)
            }).catch((error) => {
                reject(error)
            })

        })
    }
}
